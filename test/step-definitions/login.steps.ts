import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page';
import InventoryPage from '../pageobjects/inventory.page';

Given('el usuario está en la página de login', async () => {
    await LoginPage.open();
});

When(
    'el usuario ingresa el usuario {string} y contraseña {string}',
    async (username: string, password: string) => {
        await LoginPage.login(username, password);
    }
);

Then('el usuario debería ver la página de productos', async () => {
    const title = await InventoryPage.getPageTitle();
    await expect(title).toBe('Products');
});

Then('debería ver el mensaje de error {string}', async (expectedMessage: string) => {
    const message = await LoginPage.getErrorMessage();
    await expect(message).toBe(expectedMessage);
});

Then('debería ver un mensaje de error', async () => {
    const message = await LoginPage.getErrorMessage();
    await expect(message).not.toBe('');
});
