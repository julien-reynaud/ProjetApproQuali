import {test} from "./fixtures"; // Utiliser le fixture personnalisé
import {expect} from "@playwright/test";

test.describe("Suppression de l'historique", () => {
    test("devrait supprimer l'historique de navigation sur le site", async ({ page, supHisto }) => {
        // Naviguer vers la page cible
        await page.goto('https://amazon.fr');

        // Utiliser la fixture pour changer le code postal
        await supHisto.supHisto();
        
    });
});
