import { test, expect } from '@playwright/test';
import { FilterRecent } from './FilterRecent';

test.describe('copyProductLink', () => {
    test('', async ({ page }) => {
        const filterrecent = new FilterRecent(page);

        await filterrecent.gotoProductPage();
        await filterrecent.filterRecent();

        
    });


});
