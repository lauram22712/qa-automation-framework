/**
 * Clase base para todos los Page Objects.
 * Centraliza métodos comunes (esperas, navegación, clicks) para que
 * cada página específica solo defina sus propios selectores y acciones.
 */
export default class BasePage {
    /**
     * Navega a una ruta relativa a la baseUrl definida en wdio.conf.ts
     */
    async open(path: string = '') {
        await browser.url(path);
    }

    /**
     * Espera a que un elemento sea visible antes de continuar.
     */
    async waitForDisplayed(selector: string, timeout = 8000) {
        const element = await $(selector);
        await element.waitForDisplayed({ timeout });
        return element;
    }

    /**
     * Click seguro: espera a que el elemento sea clickeable antes de interactuar.
     */
    async safeClick(selector: string) {
        const element = await this.waitForDisplayed(selector);
        await element.waitForClickable();
        await element.click();
    }

    /**
     * Escribe texto en un input, limpiando el campo primero.
     */
    async typeText(selector: string, text: string) {
        const element = await this.waitForDisplayed(selector);
        await element.clearValue();
        await element.setValue(text);
    }

    async getText(selector: string): Promise<string> {
        const element = await this.waitForDisplayed(selector);
        return element.getText();
    }
}
