import { expect, type Locator, type Page } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly refuseCookiesButton: Locator;
  readonly addToCartButton: Locator;
  readonly refuseWarrantyButton: Locator;
  readonly goToCartButton: Locator;
  readonly addQuantityButton: Locator;
  readonly quantity: Locator;

  constructor(page: Page) {
    this.page = page;
    this.refuseCookiesButton = page.locator('span[class="a-button-inner"] button[id="sp-cc-rejectall-link"]');
    this.addToCartButton = page.locator('span[class="a-button-inner"] input[id="add-to-cart-button"]');
    this.refuseWarrantyButton = page.locator('span[class="a-button-inner"] input[aria-labelledby="attachSiNoCoverage-announce"]');
    this.goToCartButton = page.locator('a[href="/cart?ref_=sw_gtc"]');
    this.addQuantityButton = page.locator('span[class="a-button-inner"] span[class="a-button-text a-declarative"]');
    this.quantity = page.locator('span[class="a-dropdown-prompt"]');
  }

  async goto() {
    await this.page.goto('https://www.amazon.fr/Lenovo-Legion-16IRX9-Ordinateur-i7-14650HX/dp/B0CV4CDT3S?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=7Q1LVQC2BSN1&dib=eyJ2IjoiMSJ9.OYPTVyEmmm89f-DVMtEYGQN7aUclSHuXvWk4DIa5II7OTxgWQomFD5jHEm4uprRKqX_sqRnV3d_EdON7d9RZKg7MKuVesbdaiET2X3yA_w0oBUIIE0quhADnLQ0XoBxGzvbiNpV1qhZiw0jhG5vZ-eqthv4x1VEZ0xY1KOjmEE-AF-nbf8-QSrUYdsMXaE93wPrYLjQV2jgZ2E9JPazcNUoRvlN99rvcTNaTNp92Wcd3C3AR8bhICrBuo2J9NerL6K3KrcxfynuqnVS4_-2oO6H_bjRYPEz0HisC6NenPAA.ED_Xkqw0Chzs_2j-_8Q-ma_i4qD4KrPQMtKefm_MxAQ&dib_tag=se&keywords=lenovo%2Blegion%2B5%2Bgen%2B6&qid=1730630687&sprefix=lenovo%2Blegion%2B5%2Bgen%2B6%2Caps%2C82&sr=8-1&th=1');
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  async refuseWarranty() {
    await this.refuseWarrantyButton.click();
  }

  async goToCart() {
    await this.goToCartButton.click();
  }

  async checkProductIsInCart() {
    await expect(this.page.locator('span[data-action="delete"] span[class="a-declarative"] input[class="a-color-link"]')).toBeVisible();
  }

  async refuseCookies() {
    await this.refuseCookiesButton.click();
  }

  async addQuantity() {
    await this.addQuantityButton.click();
    await this.page.locator('li[aria-labelledby="quantity_2"]').click();
  }
}
