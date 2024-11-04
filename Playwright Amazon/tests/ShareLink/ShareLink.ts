import { Page, Locator } from '@playwright/test';

export class ShareLink {
    readonly page: Page;
    readonly ShareButton : Locator;
    readonly CopyLink : Locator;


    constructor(page: Page) {
        this.page = page;
        this.ShareButton = page.getByLabel('Partager');
        this.CopyLink = page.getByLabel('Copier le lien');

    }

    async gotoProductPage() {
        await this.page.goto('https://www.amazon.fr/Oral-B-Ultimate-Brossette-%C3%89lectrique-Convient/dp/B0B1DV8KG8/ref=cm_cr_arp_d_product_top?ie=UTF8');
        await this.page.getByLabel('Accepter').click();
        await this.ShareButton.click();
    }

    async copyLink() {
        await this.CopyLink.click();
    }

    async isLinkCopied(): Promise<boolean> {
        return this.CopyLink.isVisible();
    }
    



}
