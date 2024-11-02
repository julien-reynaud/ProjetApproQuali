import {test} from "./fixtures"; // Utiliser le fixture personnalisé
import {expect} from "@playwright/test";

test.describe('Aller catégorie : roman de poésie', () => {
    test('devrait nous amener dans la catégorie roman de poésie', async ({ page, romPoesie }) => {
        // Naviguer vers la page cible
        await page.goto('https://amazon.fr');

        // Utiliser la fixture pour aller à la cétgorie roman de poésie
        await romPoesie.romPo();
        
    });
});
