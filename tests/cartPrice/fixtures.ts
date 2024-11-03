import { test as base, Page } from '@playwright/test';
import { cartPrice } from './cartPrice';

// Créer une fixture en étendant la fonction "test"
type Fixtures = {
    verifyCartPrice: cartPrice; // Ajoute ta classe comme fixture
};

export const test = base.extend<Fixtures>({
    // Initialisation de la fixture "nearestLocker"
    verifyCartPrice: async ({ page }, use) => {
        const verifyCartPrice = new cartPrice(page);
        await use(verifyCartPrice);
    },
});
