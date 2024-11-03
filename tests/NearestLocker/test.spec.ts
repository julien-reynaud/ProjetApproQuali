import {test} from "./fixtures"; // Utiliser le fixture personnalisé
import {expect} from "@playwright/test";
import {nearestLocker} from "./nearestLocker";

test.describe('Amazon Locker le plus proche', () => {
    test('devrait trouver le amazon locker le plus proche', async ({ page, nearestLocker }) => {
        // Naviguer vers la page cible
        await page.goto('https://amazon.fr');

        // Utiliser la fixture pour changer le code postal
        await nearestLocker.nearestLocker();

        // Vérifier si le changement a bien été effectué
        const postalCode = await nearestLocker.nearestLockerName.innerText();

        expect(postalCode).toBe("Amazon Locker - Desiree");

    });
});
