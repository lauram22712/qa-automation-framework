import { When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import CheckoutPage from '../pageobjects/checkout.page';

When('el usuario va al carrito y procede al checkout', async () => {
    await CheckoutPage.goToCartAndCheckout();
});

When(
    'completa el formulario con nombre {string}, apellido {string} y código postal {string}',
    async (firstName: string, lastName: string, postalCode: string) => {
        await CheckoutPage.fillCheckoutForm(firstName, lastName, postalCode);
    }
);

When(
    'completa el formulario con nombre {string} y apellido {string} y código postal {string}',
    async (firstName: string, lastName: string, postalCode: string) => {
        await CheckoutPage.fillCheckoutForm(firstName, lastName, postalCode);
    }
);

When('finaliza la compra', async () => {
    await CheckoutPage.finishOrder();
});

Then('debería ver el mensaje {string}', async (expectedMessage: string) => {
    const message = await CheckoutPage.getConfirmationMessage();
    await expect(message).toBe(expectedMessage);
});

Then('debería ver un mensaje de error en el checkout', async () => {
    const message = await CheckoutPage.getCheckoutErrorMessage();
    await expect(message).not.toBe('');
});
