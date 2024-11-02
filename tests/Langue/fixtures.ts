import { test as base, Page } from '@playwright/test';
import { changeLanguage } from './changeLanguage';

// Créer une fixture en étendant la fonction "test"
type Fixtures = {
    changeLanguage: changeLanguage; // Ajoute ta classe comme fixture
};

export const test = base.extend<Fixtures>({
    // Initialisation de la fixture "changeLanguage"
    changeLanguage: async ({ page }, use) => {
        const langChanger = new changeLanguage(page);
        await use(langChanger);
    },
});
