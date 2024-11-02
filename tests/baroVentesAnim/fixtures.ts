import { test as base, Page } from '@playwright/test';
import { baroVentes } from './baroVentes';

// Créer une fixture en étendant la fonction "test"
type Fixtures = {
    baroVentes: baroVentes; // Ajoute ta classe comme fixture
};

export const test = base.extend<Fixtures>({
    // Initialisation de la fixture "baroVentes"
    baroVentes: async ({ page }, use) => {
        const bVentesAff = new baroVentes(page);
        await use(bVentesAff);
    },
});
