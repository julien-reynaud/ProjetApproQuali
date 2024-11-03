import {expect, Locator, Page} from '@playwright/test';

export class cartPrice {
    readonly page: Page;
    readonly acceptCookies: Locator;
    readonly searchBar: Locator;
    readonly searchButton: Locator;
    readonly product: Locator;
    readonly addToCart: Locator;
    readonly cart: Locator;
    readonly price1: Locator;
    readonly centPrice1: Locator;
    readonly price2: Locator;
    readonly centPrice2: Locator;
    readonly totalPrice: Locator;


    constructor(page: Page) {
        this.page = page;
        this.acceptCookies = page.locator("#sp-cc-accept");
        this.searchBar = page.locator('input[aria-label^=\'Rechercher\']');
        this.searchButton = page.locator('#nav-search-submit-button');
        this.product = page.locator('img[data-image-index=\'1\']');
        this.addToCart = page.locator('#add-to-cart-button');
        this.cart = page.locator('#nav-cart-count');
        this.price1 = page.locator('//html/body/div[2]/div/div[7]/div[3]/div[4]/div[13]/div/div/div[1]/div/div[4]/div[1]/span[2]/span[2]/span[1]');
        this.price2 = page.locator('//html/body/div[2]/div/div[7]/div[3]/div[4]/div[13]/div/div/div[2]/div/div[4]/div[1]/span[2]/span[2]/span[1]');
        this.centPrice1 = page.locator('//html/body/div[2]/div/div[7]/div[3]/div[4]/div[13]/div/div/div[1]/div/div[4]/div[1]/span[2]/span[2]/span[2]');
        this.centPrice2 = page.locator('//html/body/div[2]/div/div[7]/div[3]/div[4]/div[13]/div/div/div[2]/div/div[4]/div[1]/span[2]/span[2]/span[2]');
        this.totalPrice = page.locator('#sc-subtotal-amount-activecart').getByText('€');
    }

    async verifyCartPrice() {
        await this.acceptCookies.click();
        await this.page.goto('https://www.amazon.fr/LEGO-Technic-Bugatti-Chiron-Construction/dp/B0792RB3B6/ref=sr_1_1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=223K2E6YBVSEM&dib=eyJ2IjoiMSJ9.Ut-9clt9AwKHnNAcFAVflUu-yxvNnkwygO-nahmr2ooC2K7U29WNcJFSXTrUSUOR4s404MvMCCSjv-ozTI64WHvqdQkEATSsggNTlo4lD5tkxXd2_zSH3FqemTYwjrsFDQJwJsmZLb0nsiA9vTpsxP5FteA6UWA_TnYBTIjfrNZzxd_IWhzbOALXKndcsRF5AkQKP9HPOdGTK1EqRPbfvMJRiWyi_Px2jSoQoJxaM_pCaSWZVq2MEXtWui7KEPER-P5ffJPRLNRswguYrqETeRr9I7TO6nCISx40m6yleik.iMWP2vVeZWcuyswl_E52pczS9CsWc77KRLmrZG2pmtQ&dib_tag=se&keywords=bugatti+chiron+lego&qid=1730656792&sprefix=bugatti+chiron+lego%2Caps%2C66&sr=8-1');
        await this.acceptCookies.click();
        const price1 = await this.price1.innerText();
        const centPrice1 = await this.centPrice1.innerText();
        await this.addToCart.click();
        await this.page.goto("https://www.amazon.fr/EPOMAKER-Bluetooth-Clavier-m%C3%A9canique-Commande/dp/B0BN7CVLVP/ref=sr_1_4?crid=346EXSHNBS5Y5&dib=eyJ2IjoiMSJ9.pUDwuChllIrK2M9P1QkewGaY2qxlpN4pe2St2w4OYxDPSfCISXX0t-hTBwbm7arUIK6DOZEGZ98klUPw18vOHsoiP8JPlopVqgSYE1LXzjXU0itFUz-lhBVXS8mlK4Lq1F67vBzm4ZELY7-LpIclQZbcfFXCaZkofQByK6BIW8vW6CtJO2q1XB5dOHyLEFFE34EdXKmQcnhtycD3_B6v1OwbSLoShKytDRWqeDgpFcrYzzvHmTHe_XZg_f6ZOF2zLNsWsQaofNYiMoOqTe4PXA.qK80KfJLTuFyDLoAs2z5vm_lmt2L6oXyGgxuTVrDblE&dib_tag=se&keywords=monsgeek+m1&qid=1730656897&sprefix=monsgeek%2Caps%2C72&sr=8-4")
        const price2 = await this.price2.innerText();
        const centPrice2 = await this.centPrice2.innerText();
        await this.addToCart.click();
        await this.cart.click();
        const combinedPrice1 = `${price1}.${centPrice1}`;
        const combinedPrice2 = `${price2}.${centPrice2}`;
        const sumPrice = parseFloat(combinedPrice1) + parseFloat(combinedPrice2);
        await this.totalPrice.scrollIntoViewIfNeeded();
        const totalPrice = await this.totalPrice.innerText();

        return sumPrice == parseFloat(totalPrice);

    }
}
