import {test} from "./fixtures"; // Utiliser le fixture personnalisé
import {expect} from "@playwright/test";

test.describe('Changement de code postal', () => {
    test('devrait changer le code postal', async ({ page, changeCity }) => {
        // Naviguer vers la page cible
        await page.goto('https://amazon.fr');

        // Utiliser la fixture pour changer le code postal
        await changeCity.changePostalCode();

        // Vérifier si le changement a bien été effectué
        const postalCode = await changeCity.postalCode.innerText();
        expect(postalCode).toBe("59000");
    });
});
