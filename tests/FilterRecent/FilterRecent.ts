import { Page, Locator } from '@playwright/test';

export class FilterRecent {
    readonly page: Page;
    readonly FilterText: Locator;
    readonly FilterButton: Locator;
    readonly MostRecent: Locator;



    constructor(page: Page) {
        this.page = page;
        this.FilterButton = page.locator('#a-autoid-36-announce');
        this.MostRecent = page.getByLabel('Le plus récent');
    }

    async gotoProductPage() {
        await this.page.goto('https://amzn.eu/d/17ag7TG');
        await this.page.getByLabel('Accepter').click();
    }

    async filterRecent() {
        await this.FilterButton.click();
        await this.MostRecent.click();
    }

    



    





    



}
