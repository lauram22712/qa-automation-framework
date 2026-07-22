import BasePage from './base.page';

class InventoryPage extends BasePage {
    private selectors = {
        pageTitle: '.title',
        inventoryItems: '.inventory_item',
        addToCartButton: (itemName: string) =>
            `//div[text()="${itemName}"]/ancestor::div[@class="inventory_item"]//button`,
        cartBadge: '.shopping_cart_badge',
    };

    async getPageTitle(): Promise<string> {
        return this.getText(this.selectors.pageTitle);
    }

    async getItemsCount(): Promise<number> {
        const items = await $$(this.selectors.inventoryItems);
        return items.length;
    }

    async addItemToCart(itemName: string) {
        await this.safeClick(this.selectors.addToCartButton(itemName));
    }

    async getCartCount(): Promise<string> {
        return this.getText(this.selectors.cartBadge);
    }
}

export default new InventoryPage();
