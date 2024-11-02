import { Page } from '@playwright/test';

export class ProductPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Méthode pour aller à une page produit spécifique
    async goToProduct(productUrl: string) {
        await this.page.goto(productUrl);  // Naviguer vers l'URL d'une page produit spécifique
    }

    // Méthode pour ajouter un produit au panier
    async addProductToCart() {
        await this.page.click('#add-to-cart-button');  // Localisateur pour ajouter au panier
    }

    // Méthode pour vérifier si le produit a bien été ajouté au panier
    async isProductInCart() {
        return await this.page.isVisible('text=Ajouté au panier');  // Vérification si un message de confirmation est affiché
    }
}
