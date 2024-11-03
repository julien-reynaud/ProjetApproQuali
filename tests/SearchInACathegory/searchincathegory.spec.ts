import { test, expect } from '@playwright/test';
import { HomePageForCathegorySeach } from '../../pages/HomePageForCathegorySeach';

test('Search for a cathegory and click on the first link', async ({ page }) => {
  const homePageForCathegorySeach = new HomePageForCathegorySeach(page);

    // Go to the homepage
    await homePageForCathegorySeach.goto();

    // Select the cathegory
    await homePageForCathegorySeach.cathegoySelect('Photo & Caméscopes');

    // Click on the first product
    await homePageForCathegorySeach.clickOnFirstProduct('Camera');
});