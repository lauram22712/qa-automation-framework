import type { Options } from '@wdio/types';

export const config: Options.Testrunner = {
    runner: 'local',
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: './tsconfig.json',
        },
    },

    specs: ['./test/features/**/*.feature'],
    exclude: [],

    maxInstances: 1,

    capabilities: [
        {
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: process.env.CI ? ['headless', 'disable-gpu', 'window-size=1920,1080'] : [],
            },
        },
    ],

    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.saucedemo.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    framework: 'cucumber',

    reporters: [
        'spec',
        [
            'allure',
            {
                outputDir: 'allure-results',
                disableWebdriverStepsReporting: false,
                disableWebdriverScreenshotsReporting: false,
            },
        ],
    ],

    cucumberOpts: {
        require: ['./test/step-definitions/**/*.ts'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false,
    },

    // Screenshot automático cuando un step falla
    afterStep: async function (step, scenario, result) {
        if (result.error) {
            await browser.takeScreenshot();
        }
    },
};
