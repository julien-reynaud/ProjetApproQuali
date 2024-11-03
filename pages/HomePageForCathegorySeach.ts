import { expect, type Locator, type Page } from '@playwright/test';

export class HomePageForCathegorySeach {
  readonly page: Page;
  readonly AllCathegorySelector: Locator; // Toutes
  readonly CathegorySelector: Locator; // High Tech
  readonly SubCathegorySelector: Locator; // Photo & Caméscopes

  constructor(page: Page) {
    this.page = page;
    this.AllCathegorySelector = page.locator('a', {hasText: 'Toutes',});
    this.CathegorySelector = page.locator('a', {hasText: 'High-Tech',});
    this.SubCathegorySelector = page.locator('a', {hasText: 'Photo & Caméscopes',}).first();
  }

  async goto() {
    await this.page.goto('https://amazon.fr');
  }

  async cathegoySelect(productName: string) {
    await this.AllCathegorySelector.click();
    await this.CathegorySelector.click();
    await this.SubCathegorySelector.click();
  }

  async clickOnFirstProduct(productName: string) {
    await this.page.locator('a', {
      hasText: productName,
    }).first().click();
  } 
}