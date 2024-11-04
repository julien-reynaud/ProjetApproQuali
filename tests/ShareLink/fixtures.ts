import { test as base, Page } from '@playwright/test';
import { ShareLink } from './ShareLink';

// Créer une fixture en étendant la fonction "test"
type Fixtures = {
    ShareLink: ShareLink; // Ajoute ta classe comme fixture
};

export const test = base.extend<Fixtures>({
    // Initialisation de la fixture "nearestLocker"
    ShareLink: async ({ page }, use) => {
        const shareLink = new ShareLink(page);
        await use(shareLink);
    },
});
