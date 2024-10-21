import { test, expect } from '@playwright/test';

async function acceptCookies(page) {
  await page.getByLabel('Accepter').click();
  
}

test('accept cookies', async ({ page }) => {
  await page.goto('https://www.amazon.fr/');
  await acceptCookies(page);
});







