import {expect, Locator, Page} from '@playwright/test';
import { baroVentes } from '../baroVentesAnim/baroVentes';

export class supHisto {
    readonly page: Page;

    private baroVentesInstance: baroVentes;

    readonly compteListe: Locator;
    readonly vosRecom: Locator;
    readonly votreHisto: Locator;
    readonly param: Locator;
    readonly retirerArticles: Locator;

    readonly cookies: Locator;

    

    constructor(page: Page) {
        this.page = page;
        this.baroVentesInstance = new baroVentes(page);

        this.compteListe = page.getByRole('link', { name: 'Bonjour, Identifiez-vous' });
        this.vosRecom = page.getByRole('link', { name: 'Vos recommandations' });
        this.votreHisto = page.getByLabel('Votre historique de navigation');
        this.param = page.getByLabel('Paramètres');
        this.retirerArticles = page.getByLabel('Retirer des articles');

        this.cookies = page.getByLabel('Accepter');

    }

    async supHisto() {
        //Partie où on clique sur un produit pour qu'il apparaisse dans l'historique (On utilise la fonction affBaVentes de baroVentes)
        await this.baroVentesInstance.affBaVentes();

        //Partie où on supprime l'historique
        await this.page.waitForTimeout(5000);// Le temps que la page charge bien pour que le hover fonctionne

        await this.compteListe.hover();
        await this.page.waitForTimeout(1000);

        await this.vosRecom.click();
        await this.page.waitForTimeout(1000);

        await this.votreHisto.click();
        await this.page.waitForTimeout(1000);

        await this.param.click();
        await this.page.waitForTimeout(1000);

        await this.retirerArticles.click();
        await this.page.waitForTimeout(1000);

        return await this.page.title();
    }

}