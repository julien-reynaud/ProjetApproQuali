import { test, expect } from '@playwright/test';
import { HomePageForResearch } from '../../pages/HomePageForResearch';

test('Search for an item and click on the first link', async ({ page }) => {
  const homepageforresearch = new HomePageForResearch(page);

    // Go to the homepage
    await homepageforresearch.goto();

    // Search for a product
    await homepageforresearch.searchProduct('iphone 15 pro max');

    // Click on the first product
    await homepageforresearch.clickOnFirstProduct('iphone 15 pro max');

    // Check that the product name is correct
    await expect(page.locator('tr[class="a-spacing-small po-model_name"] td[class="a-span9"]')).toContainText('iPhone 15 Pro Max');
});