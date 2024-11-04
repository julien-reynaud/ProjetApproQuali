import {expect, Locator, Page} from '@playwright/test';

export class nearestLocker {
    readonly page: Page;
    readonly acceptCookies: Locator;
    readonly bestSales: Locator;
    readonly amazonLockerPage: Locator;
    readonly postalCodeInput: Locator;
    readonly suggestPostalCode: Locator;
    readonly searchButton: Locator;
    readonly nearestLockerName: Locator;

// TODO: Define your locators attribute here

    constructor(page: Page) {
        this.page = page;
        this.acceptCookies = page.locator("#sp-cc-accept");
        this.bestSales = page.locator('a[data-csa-c-slot-id=\'nav_cs_2\']');
        this.amazonLockerPage = page.locator("a[aria-label$='Hub']");
        this.postalCodeInput = page.locator("input[aria-label*='de']");
        this.suggestPostalCode = page.locator("#suggestion-1");
        this.searchButton = page.locator("div[class='_3K9nFokgcU-LQkSB-PyGBW']");
        this.nearestLockerName = page.locator("//html/body/div[1]/div[1]/div[3]/div/div[2]/div/div/div/div/div[2]/div[1]/div/div[1]/div[1]/div[1]/div/div[2]/div/div[1]/div[1]/div[1]/div/div/p[1]/p");


// TODO: Initialize your locators here
    }
// TODO: Add your business gesture here
    async nearestLocker() {
        await this.acceptCookies.click();
        await this.bestSales.click();
        await this.amazonLockerPage.click();
        await this.postalCodeInput.fill("59000");
        await this.suggestPostalCode.click()
        await this.page.waitForTimeout(5000);
        await this.page.waitForSelector("//html/body/div[1]/div[1]/div[3]/div/div[2]/div/div/div/div/div[2]/div[1]/div/div[1]/div[1]/div[1]/div/div[2]/div/div[1]/div[1]/div[1]/div/div/p[1]/p", {state: "visible"});
        return (await this.nearestLockerName.innerText());
    }
}
