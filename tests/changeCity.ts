import {expect, Locator, Page} from '@playwright/test';

export class changeCity {
    readonly page: Page;
    readonly changeCityButton: Locator;
    readonly postalCodeInput: Locator;
    readonly reloadButton: Locator;
    readonly postalCode: Locator;
// TODO: Define your locators attribute here

    constructor(page: Page) {
        this.page = page;
        this.changeCityButton = page.locator("#glow-ingress-block");
        this.postalCodeInput = page.locator("#GLUXZipUpdateInput");
        this.reloadButton = page.locator("#GLUXZipUpdate-announce")
        this.postalCode = page.locator("#glow-ingress-line2");
// TODO: Initialize your locators here
    }
// TODO: Add your business gesture here
    async changePostalCode() {
        await this.changeCityButton.click();
        await expect(this.postalCodeInput).toBeVisible();
        await this.postalCodeInput.fill("59000");
        await this.reloadButton.click();
        await this.page.waitForTimeout(5000);
        console.log(await this.postalCode.innerText());
        return (await this.postalCode.innerText()).slice(0, 5);
    }
}
