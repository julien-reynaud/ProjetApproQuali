import { test as base, Page } from '@playwright/test';
import { nearestLocker } from './nearestLocker';

// Créer une fixture en étendant la fonction "test"
type Fixtures = {
    nearestLocker: nearestLocker; // Ajoute ta classe comme fixture
};

export const test = base.extend<Fixtures>({
    // Initialisation de la fixture "nearestLocker"
    nearestLocker: async ({ page }, use) => {
        const nearestLockerAmazon = new nearestLocker(page);
        await use(nearestLockerAmazon);
    },
});
