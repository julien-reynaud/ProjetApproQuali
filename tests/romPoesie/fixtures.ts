import { test as base, Page } from '@playwright/test';
import { romPoesie } from './romPoesie.ts';

// Créer une fixture en étendant la fonction "test"
type Fixtures = {
    romPoesie: romPoesie; // Ajoute ta classe comme fixture
};

export const test = base.extend<Fixtures>({
    // Initialisation de la fixture "romPoesie"
    romPoesie: async ({ page }, use) => {
        const romPoFinder = new romPoesie(page);
        await use(romPoFinder);
    },
});
