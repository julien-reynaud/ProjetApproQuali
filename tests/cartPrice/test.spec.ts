import {test} from "./fixtures"; // Utiliser le fixture personnalisé
import {expect} from "@playwright/test";

test.describe('Prix panier', () => {
    test('vérification du prix du panier', async ({ page, verifyCartPrice }) => {
        // Naviguer vers la page cible
        await page.goto('https://amazon.fr');

        const priceVerification = await verifyCartPrice.verifyCartPrice();
        expect(priceVerification).toBe(true);
    });
});
