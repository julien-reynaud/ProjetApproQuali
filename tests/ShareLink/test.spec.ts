import { test, expect } from '@playwright/test';
import { ShareLink } from './ShareLink';

test.describe('copyProductLink', () => {
    test('', async ({ page }) => {
        const shareLink = new ShareLink(page);

        await shareLink.gotoProductPage();
        await shareLink.copyLink();

        expect(await shareLink.isLinkCopied()).toBe(true);

        
    });
});
