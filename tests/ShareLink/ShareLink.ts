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
        await this.page.goto('https://amzn.eu/d/17ag7TG');
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
