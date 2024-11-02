import { test, expect } from '@playwright/test';
import { CartPageRemove } from '../pages/CartPageRemove';  // Classe pour la page panier

test('Remove a product from the cart', async ({ page }) => {
  // Supposons que tu sois déjà loggé et qu'un produit soit déjà dans le panier
  await page.goto('https://www.amazon.fr/gp/cart/view.html');  // URL de la page du panier d'Amazon

  const cartPage = new CartPageRemove(page);

  // Vérifie que le panier contient bien un article avant de le supprimer
  const initialProductCount = await cartPage.getProductCount();
  expect(initialProductCount).toBeGreaterThan(0);  // S'assure qu'il y a au moins 1 produit

  // Supprime l'article du panier
  await cartPage.removeProduct();

  // Vérifie si le produit a bien été retiré et que le panier est désormais vide
  const cartIsEmpty = await cartPage.isCartEmpty();
  expect(cartIsEmpty).toBeTruthy();  // Le panier doit être vide après la suppression
});
