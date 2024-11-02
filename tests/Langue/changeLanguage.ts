import {expect, Locator, Page} from '@playwright/test';

export class changeLanguage {
    readonly page: Page;
    readonly changeLanguageButton: Locator;
    readonly changeCountry: Locator;
    readonly country: Locator;
    readonly selectCountry: Locator;
    readonly validate: Locator;

    readonly cookies: Locator;

    constructor(page: Page) {
        this.page = page;
        this.changeLanguageButton = page.locator('#icp-nav-flyout');
        this.changeCountry = page.getByRole('link', { name: 'Modifier le pays/la région' });
        this.country = page.locator('.a-dropdown-prompt');
        this.selectCountry = page.locator('#icp-dropdown-item-1');
        this.validate = page.getByLabel('Accéder au site Web');

        this.cookies = page.getByLabel('Accepter');
    }

    async changeLang() {
        await this.cookies.click();

        await this.changeLanguageButton.hover();
        await this.changeCountry.click();
        await this.country.click();
        await this.selectCountry.click();
        await this.validate.click();
        await this.page.waitForURL("https://www.amazon.fr/customer-preferences/country?ref_=icp_lop_mop_chg&preferencesReturnUrl=/");
        return await this.page.title();
    }

}