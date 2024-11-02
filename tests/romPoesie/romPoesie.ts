import {expect, Locator, Page} from '@playwright/test';

export class romPoesie {
    readonly page: Page;
    readonly btnToutes: Locator;
    readonly btnLivres: Locator;
    readonly btnTousLivres: Locator;
    readonly btnRomLitt: Locator;
    readonly romPoesieButton: Locator;

    readonly cookies: Locator;

    constructor(page: Page) {
        this.page = page;
        this.btnToutes = page.getByLabel('Ouvrir le menu Toutes les cat')
        this.btnLivres = page.getByRole('link', { name: 'Livres', exact: true });
        this.btnTousLivres = page.getByRole('link', { name: 'Tous les livres' }).nth(1);
        this.btnRomLitt = page.getByTitle('Romans et littérature');
        this.romPoesieButton = page.getByTitle('Poésie');

        this.cookies = page.getByLabel('Accepter');
    }

    async romPo() {
        await this.cookies.click();
        await this.page.waitForTimeout(1000);

        await this.btnToutes.click();
        await this.page.waitForTimeout(1000);

        await this.btnLivres.click();
        await this.page.waitForTimeout(1000);

        await this.btnTousLivres.click();
        await this.page.waitForTimeout(1000);

        await this.btnRomLitt.hover();
        await this.page.waitForTimeout(1000);

        await this.romPoesieButton.click();
        

    }

}