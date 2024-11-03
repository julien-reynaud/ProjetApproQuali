import { test as base, Page } from '@playwright/test';
import { addMultiProduct } from './addMultiProduct';

// Créer une fixture en étendant la fonction "test"
type Fixtures = {
    verifyCartProductQuantity: addMultiProduct; // Ajoute ta classe comme fixture
};

export const test = base.extend<Fixtures>({
    // Initialisation de la fixture "nearestLocker"
    verifyCartProductQuantity: async ({ page }, use) => {
        const quantityProduct = new addMultiProduct(page);
        await use(quantityProduct);
    },
});
