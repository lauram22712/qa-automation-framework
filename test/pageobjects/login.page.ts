import BasePage from './base.page';

/**
 * Page Object de la pantalla de login.
 * Solo conoce sus propios selectores y las acciones que un usuario
 * puede realizar en esta pantalla — nada de asserts aquí.
 */
class LoginPage extends BasePage {
    private selectors = {
        usernameInput: '#user-name',
        passwordInput: '#password',
        loginButton: '#login-button',
        errorMessage: '[data-test="error"]',
    };

    async open() {
        await super.open('/');
    }

    async login(username: string, password: string) {
        await this.typeText(this.selectors.usernameInput, username);
        await this.typeText(this.selectors.passwordInput, password);
        await this.safeClick(this.selectors.loginButton);
    }

    async getErrorMessage(): Promise<string> {
        return this.getText(this.selectors.errorMessage);
    }
}

export default new LoginPage();
