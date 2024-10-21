import { test as base, Page } from '@playwright/test';
import { changeCity } from './changeCity';

// Créer une fixture en étendant la fonction "test"
type Fixtures = {
    changeCity: changeCity; // Ajoute ta classe comme fixture
};

export const test = base.extend<Fixtures>({
    // Initialisation de la fixture "changeCity"
    changeCity: async ({ page }, use) => {
        const cityChanger = new changeCity(page);
        await use(cityChanger);
    },
});
