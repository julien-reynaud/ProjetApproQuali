import {test} from "./fixtures"; // Utiliser le fixture personnalisé
import {expect} from "@playwright/test";

test.describe('Amazon Locker le plus proche', () => {
    test('devrait trouver le amazon locker le plus proche', async ({ page, nearestLocker }) => {
        // Naviguer vers la page cible
        await page.goto('https://amazon.fr');

        // Utiliser la fixture pour changer le code postal
        await nearestLocker.nearestLocker();

        // Vérifier si le changement a bien été effectué
        const adress = await nearestLocker.nearestLockerName.innerText();

        expect(adress).toBe("Amazon Locker - Desiree");

    });
});
