# project_amazon

Feature: ‘amazon.fr’ Test Automation using Playwright 


### Scenario: Logout from the account 

  Given I am logged into my account 

  When I open the account menu 

  And I click on the "Logout" button 

  Then I should be logged out and redirected to the Amazon homepage 

 

### Scenario: Attempt to create a new account with an existing email 

  Given I navigate to the Amazon homepage 

  When I go to the registration page 

  And I fill in the form with an already registered email 

  And I submit the form 

  Then I should see an error message indicating the email is already in use 

 

### Scenario: Verify homepage content 

  Given I navigate to the Amazon homepage 

  Then I should see the main categories, promotional banners, and the search bar 

 
 
### Scenario: Checkout with new account creation 

  Given I have a product in my cart 

  When I proceed to checkout 

  And I choose to create a new account during the checkout process 

  And I fill in the required account details 

  Then I should be able to complete the purchase and see a confirmation 

 

### Scenario: Checkout with existing account login 

  Given I have a product in my cart 

  When I proceed to checkout 

  And I choose to log in with my existing account credentials 

  Then I should be able to complete the purchase and see a confirmation page 

 

### Scenario: Remove a product from the cart 

  Given I have a product in my cart 

  When I navigate to the cart page 

  And I click on the "Remove" button next to the product 

  Then the product should be removed from the cart 

 

### Scenario: Apply filters in a category 

  Given I navigate to the "Books" category page 

  When I apply a filter for "Hardcover" books 

  Then I should only see hardcover books in the product list 

 

### Scenario: Purchase "Frequently Bought Together" items 

  Given I am viewing a product details page 

  When I see the "Frequently Bought Together" section 

  And I add the suggested items to my cart 

  Then I should be able to proceed to checkout with all items 

 

### Scenario: Verify delivery addresses during checkout 

  Given I am on the checkout page 

  When I select a delivery address 

  Then I should see the corresponding delivery options for that address 

## Léo
### Scenario: Search for a product and see the details for one
	Given I navigate to the Amazon homepage 
	When I search for "laptop" using the search bar 
	And I select a product from the search results 
	Then I should see the product page  

### Scenario: Search for a product within a category 
	Given I navigate to the Amazon homepage 
	When I select the "Electronics" category from the navigation menu 
	And I browse the subcategories 
	Then I should see a list of products in the selected subcategory 

### Scenario: Add a product to the cart 
	Given I am viewing a product details page 
	When I click on "Add to cart" 
	Then the product should be added to my cart 
	And I should see a confirmation of the product being in the cart 

### Scenario: Modify product quantity in the cart 
	Given I have a product in my cart 
	When I navigate to the cart page 
	And I increase the product quantity to 2 
	Then the total price should be updated accordingly 

## Julien
### Scénario : Changer la langue du site en allemand => id : Langue
	Given I navigate to the Amazon homepage
	When I hover the language menu
	And I click on "modifier le pays/la région"
	And I select "Allemagne" in the country choice
	And I click on the button "Accéder au site Web"
	Then I should be redirected to the german website

### Scénario : Rentrer dans la catégorie romans de poésie => id : romPoesie
	Given I navigate to the Amazon homepage
	When I click on the "Livres" menu	
	And I hover "Roman et littérature"
	And I click on "Poésie"
	Then I should be redirected to the poetry books category
 
### Scénario : Voir le produit le mieux vendu dans le baromètre des ventes, catégorie CD et vinyles => id : baroVentesAnim
	Given I navigate to the Amazon homepage
	And I click on the menu "Toutes"
	And I click on "Baromètre des ventes"
	And I click on "CD et Vinyles"
 	And I click on the first item
	Then I should see the best selling item from the "CD et Vinyles" category
 
### Scénario : Supprimer un article de l'historique de navigation => id : supprHisto
	Given I am logged in and at the amazon homepage and I have searched for an article (we use the previous scenario)
	When I hover the "Account" menu
	And I click on the button "Vos recommandations"
 	And I click on the button "Votre historique de navigation"
	And I click on the icon of the parameter button
 	And I click on the button "Retirer des articles"
	Then the article should disapear from my history

##Audren
### Scénario : Trouver l'Amazon le plus proche => id : NearestLocker
	Given I am on the home page (amazon.fr)
 	And I click on the button to accept cookies 
  	And I click on "Meilleures ventes"
   	And I click on "Points de retrait Amazon Hub"
    	And I enter the postal code into the search bar (59000)
     	And I click on the first postal code recommendation
      	Then the first Amazon Locker should be "Amazon Locker - Desiree"

### Scénario : Ajouter un article avec une quantité égale à 10 pour voir si dans le panier la bonne quantité a été ajoutée => id : addMultiProduct
	Given I am on the home page
 	And I accept cookies
  	And I go to the product page
   	And I modify the quantity to 10
    	And I add the ten product to my cart
     	And I click on the cart on top right
      	Then I check the amount of product in my cart if is equal to 10

### Scénario : vérifier le sous-total des articles dans le panier => id : cartPrice
	Given I am on the home page
 	And I accept coockies 
  	And I go to the first product page
   	And I add the first product to the cart 
    	And I go to the second product page
     	And I add the second product to the cart
      	And I go to the cart page
       	Then the subtotal should be the sum of products in my cart times the quatity of each product

### Scénario : changer la ville de livraison en haut à gauche de la page d'accueil => id : deliveryCity
	Giver I am on the home page
 	And I click on "Mettre à jour l'emplacement"
  	And I enter the postal code in the input area
   	And I click on the button "Actualiser"
    	Then the postal should be write at the place of "Mettre à jour l'emplacement"
