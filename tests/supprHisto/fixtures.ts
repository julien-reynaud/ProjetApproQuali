import { test as base, Page } from '@playwright/test';
import { supHisto } from './supHisto.ts';

// Créer une fixture en étendant la fonction "test"
type Fixtures = {
    supHisto: supHisto; // Ajoute ta classe comme fixture
};

export const test = base.extend<Fixtures>({
    // Initialisation de la fixture "supHisto"
    supHisto: async ({ page }, use) => {
        const histoSuppr = new supHisto(page);
        await use(histoSuppr);
    },
});
