import {test} from "./fixtures"; // Utiliser le fixture personnalisé
import {expect} from "@playwright/test";

test.describe('Changement de langue', () => {
    test('devrait changer la langue du site', async ({ page, changeLanguage }) => {
        // Naviguer vers la page cible
        await page.goto('https://amazon.fr');

        // Utiliser la fixture pour changer le code postal
        await changeLanguage.changeLang();
        
    });
});
