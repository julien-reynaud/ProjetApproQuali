import { test, expect } from '@playwright/test';
import { ProductPage } from '../../pages/ProductPage';

test('Modify product quantity in cart', async ({ page }) => {
  const productPage = new ProductPage(page);

    // Go to the page we need
    await productPage.goto();

    // Refuse cookies
    await productPage.refuseCookies();

    // Add the product to the cart
    await productPage.addToCart();

    // Refuse the warranty
    await productPage.refuseWarranty();

    // Go to the cart
    await productPage.goToCart();

    // Check that the product is in the cart
    await productPage.checkProductIsInCart();

    // Add quantity
    await productPage.addQuantity();

    // Check that the quantity is correct
    await expect(page.locator('span[class="a-dropdown-prompt"]')).toContainText('2');
});