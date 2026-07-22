import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page';
import InventoryPage from '../pageobjects/inventory.page';

Given('el usuario está logueado como {string}', async (username: string) => {
    await LoginPage.open();
    await LoginPage.login(username, 'secret_sauce');
});

When('el usuario agrega el producto {string} al carrito', async (itemName: string) => {
    await InventoryPage.addItemToCart(itemName);
});

Then('el contador del carrito debería mostrar {string}', async (expectedCount: string) => {
    const count = await InventoryPage.getCartCount();
    await expect(count).toBe(expectedCount);
});

Then('debería ver al menos {int} producto en el catálogo', async (minCount: number) => {
    const count = await InventoryPage.getItemsCount();
    await expect(count).toBeGreaterThanOrEqual(minCount);
});
