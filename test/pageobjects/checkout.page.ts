import BasePage from './base.page';

class CheckoutPage extends BasePage {
    private selectors = {
        cartIcon: '.shopping_cart_link',
        checkoutButton: '#checkout',
        firstNameInput: '#first-name',
        lastNameInput: '#last-name',
        postalCodeInput: '#postal-code',
        continueButton: '#continue',
        finishButton: '#finish',
        confirmationMessage: '.complete-header',
        checkoutErrorMessage: '[data-test="error"]',
    };

    async goToCartAndCheckout() {
        await this.safeClick(this.selectors.cartIcon);
        await this.safeClick(this.selectors.checkoutButton);
    }

    async fillCheckoutForm(firstName: string, lastName: string, postalCode: string) {
        await this.typeText(this.selectors.firstNameInput, firstName);
        await this.typeText(this.selectors.lastNameInput, lastName);
        await this.typeText(this.selectors.postalCodeInput, postalCode);
        await this.safeClick(this.selectors.continueButton);
    }

    async finishOrder() {
        await this.safeClick(this.selectors.finishButton);
    }

    async getConfirmationMessage(): Promise<string> {
        return this.getText(this.selectors.confirmationMessage);
    }

    async getCheckoutErrorMessage(): Promise<string> {
        return this.getText(this.selectors.checkoutErrorMessage);
    }
}

export default new CheckoutPage();
