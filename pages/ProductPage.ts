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
    await this.page.goto("https://amzn.eu/d/9YMIcK5")
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
