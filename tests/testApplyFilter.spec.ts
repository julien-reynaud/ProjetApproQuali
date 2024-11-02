import { test, expect } from '@playwright/test';
import { CategoryPageFilter } from '../pages/CategoryPageFilter';

test('Apply filters from a category', async ({ page }) => {
    const categoryFilter = new CategoryPageFilter(page);

    await page.goto('https://www.amazon.fr/s?i=stripbooks&rh=n%3A301061&dc&qid=1730551241&rnid=5272947031&ref=sr_nr_p_n_feature_browse-bin_1&ds=v1%3AyQ%2BXBDUWo8gDthblf%2BvWDX6dMIexPIMXuD%2F7mLedNVo');
    await categoryFilter.applyFilter();

    // Vérifier que le filtre est bien appliqué
    const isChecked = await page.isChecked('apb-browse-refinements-checkbox_12');
    expect(isChecked).toBe(true);
});
