import {expect, Locator, Page} from '@playwright/test';

export class baroVentes {
    readonly page: Page;
    readonly btnToutes: Locator;
    readonly baroVentesButton: Locator;

    readonly cdVinyles: Locator;
    readonly meilleureVente: Locator;

    readonly cookies: Locator;

    constructor(page: Page) {
        this.page = page;
        this.btnToutes = page.getByLabel('Ouvrir le menu Toutes les cat')
        this.baroVentesButton = page.getByRole('link', { name: 'Baromètre des ventes' });
        this.cdVinyles = page.getByRole('link', { name: 'CD et Vinyles', exact: true });
        this.meilleureVente = page.locator('#gridItemRoot').first();

        this.cookies = page.getByLabel('Accepter');
    }

    async affBaVentes() {
        await this.cookies.click();

        await this.btnToutes.click();
        await this.page.waitForTimeout(1000);

        await this.baroVentesButton.click();
        await this.page.waitForTimeout(1000);

        await this.cdVinyles.click();
        await this.page.waitForTimeout(1000);

        await this.meilleureVente.click();
        await this.page.waitForTimeout(1000);

        return await this.page.title();
        
    }

}