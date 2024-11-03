import {Locator, Page} from '@playwright/test';

export class addMultiProduct {
    readonly page: Page;
    readonly acceptCookies: Locator;
    readonly selectorQuantity: Locator;
    readonly quantity10: Locator;
    readonly addToCart: Locator;
    readonly cart: Locator;
    readonly cartQuantityProduct: Locator;

    constructor(page: Page) {
        this.page = page;
        this.acceptCookies = page.locator("#sp-cc-accept");
        this.selectorQuantity = page.locator('#a-autoid-0-announce');
        this.quantity10 = page.locator('#quantity_9');
        this.addToCart = page.locator('#add-to-cart-button');
        this.cart = page.locator('#nav-cart-count');
        this.cartQuantityProduct = page.locator('#sc-subtotal-label-buybox');
    }

    async verifyQuantity() {
        await this.acceptCookies.click();
        await this.page.goto("https://www.amazon.fr/gp/product/B0CT5HD3NY/ref=ox_sc_act_image_1?smid=A24K16DE9E0C53&psc=1"); // Navigate to the product page
        await this.selectorQuantity.click();
        await this.quantity10.click();
        await this.addToCart.click();
        await this.cart.click();
        const quantity = await this.cartQuantityProduct.innerText();

        const match = quantity.match(/\((\d+)\s+articles\)/);

        if (match) {
            return parseInt(match[1], 10);
        } else {
            return -1;
        }

    }
}
