import { Page } from '@playwright/test';

export class CategoryPageFilter {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Nouvelle méthode pour accepter les cookies
    async acceptCookies() {
        const consentButton = await this.page.$('#sp-cc-accept');
        if (consentButton) {
            await consentButton.click();
            await this.page.waitForTimeout(500); // Temps d'attente pour s'assurer que le consentement est enregistré
        }
    }

    // Méthode pour appliquer le filtre checkbox
    async applyFilter() {
        await this.acceptCookies(); // Appel à la méthode pour accepter les cookies avant d'appliquer le filtre
        const filterLocator = this.page.locator(`#apb-browse-refinements-checkbox_12`);

        // On s'assure que l'élément est visible avant d'interagir
        //await filterLocator.waitFor({ state: 'visible' });

        // Utiliser check() pour cocher le checkbox, peu importe son état initial
        await filterLocator.waitFor({ state: 'visible' })
        await filterLocator.check();
    }
}
