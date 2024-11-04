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
        await this.page.goto('https://www.amazon.fr/Oral-B-Ultimate-Brossette-%C3%89lectrique-Convient/dp/B0B1DV8KG8/ref=cm_cr_arp_d_product_top?ie=UTF8');
        await this.page.getByLabel('Accepter').click();
    }

    async filterRecent() {
        await this.FilterButton.click();
        await this.MostRecent.click();
    }

    



    





    



}
