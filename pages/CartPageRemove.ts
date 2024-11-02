import { Page } from '@playwright/test';  // Import de 'Page' depuis Playwright

export class CartPageRemove {
  constructor(private page: Page) {}  // 'page' est bien de type 'Page'

  // Méthode pour récupérer le nombre de produits dans le panier
  async getProductCount() {
    await this.page.waitForSelector('#sc-active-cart');
    const products = await this.page.$$('#sc-active-cart');  // Sélectionne tous les produits du panier
    return products.length;  // Retourne le nombre de produits dans le panier
  }

  // Méthode pour supprimer un produit du panier
  async removeProduct() {
    await this.page.waitForSelector('[aria-label="Diminuer la quantité d\'une unité"]', {state: 'detached'});
    await this.page.evaluate(() => {
        const buttonhey = document.querySelector('[aria-label="Diminuer la quantité d\'une unité"]');
            if(buttonhey){
            }
    });  // Clique sur le bouton pour supprimer un produit
  }

  // Méthode pour vérifier si le panier est vide
  async isCartEmpty() {
    return this.page.isVisible('.sc-your-amazon-cart-is-empty');  // Vérifie si le panier est vide
  }
}
