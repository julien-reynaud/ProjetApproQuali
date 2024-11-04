import {test} from "./fixtures"; // Utiliser le fixture personnalisé
import {expect} from "@playwright/test";
import {addMultiProduct} from "./addMultiProduct";

test.describe('Prix panier', () => {
    test('vérification du prix du panier', {tag : ['@AMP-dev', '@AMP-sit']}, async ({ page, verifyCartProductQuantity }) => {
        // Naviguer vers la page cible
        await page.goto('https://amazon.fr');

        const quantityVerification = await verifyCartProductQuantity.verifyQuantity();
        expect(quantityVerification).toBe(10);
    });
});
