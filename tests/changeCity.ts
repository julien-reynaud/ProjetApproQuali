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
        this.changeCityButton = page.locator('//*[@id="glow-ingress-block"]');
        this.postalCodeInput = page.locator('//*[@id=\'GLUXZipUpdateInput\']');
        this.reloadButton = page.locator('//input[@aria-labelledby=\'GLUXZipUpdate-announce\']')
        this.postalCode = page.locator('//*[@id=\'glow-ingress-line2\']');
// TODO: Initialize your locators here
    }
// TODO: Add your business gesture here
    async changePostalCode() {
        await this.changeCityButton.click();
        await expect(this.postalCodeInput).toBeVisible();
        await this.postalCodeInput.fill("59000");
        await this.reloadButton.click();
        await this.page.waitForTimeout(1000);
        return await this.postalCode.innerText();
    }
}
