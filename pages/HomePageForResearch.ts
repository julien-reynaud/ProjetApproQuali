import { expect, type Locator, type Page } from '@playwright/test';

export class HomePageForResearch {
  readonly page: Page;
  readonly SearchProductInput: Locator;
  readonly SearchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.SearchProductInput = page.locator('div[class="nav-search-field "] input[id="twotabsearchtextbox"]');
    this.SearchButton = page.locator('div[class="nav-right"] input[id="nav-search-submit-button"]');
  }

  async goto() {
    await this.page.goto('https://amazon.fr');
  }

  async searchProduct(productName: string) {
    await this.SearchProductInput.click();
    await this.SearchProductInput.fill(productName);
    await this.SearchButton.click();
  }

  async clickOnFirstProduct(productName: string) {
    await this.page.locator('a', {
      hasText: productName,
    }).first().click();
  } 
}