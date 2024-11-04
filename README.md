# project_amazon

Feature: ‘amazon.fr’ Test Automation using Playwright 

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

## Audren
### Scénario : Trouver l'Amazon Locker le plus proche => id : NearestLocker
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

## Corentin
### Scenario: Remove a product from the cart 
  	Given I have a product in my cart 
	When I navigate to the cart page 
	And I click on the "Remove" button next to the product 
	Then the product should be removed from the cart 

 

### Scenario: Apply filters in a category 
	Given I navigate to the "Books" category page 
	When I apply a filter for "Hardcover" books 
	Then I should only see hardcover books in the product list 

### Scenario: Possibility to access to a Pro Account
	Given I navigate to the login page 
	When I click on "Create a Professional Account"
	Then I should only be redirected on the Pro Account section

### Scenario: Possibility to access to CGU
	Given I navigate to the login page 
	When I click on "Consulter les Conditions Genérales d'Utilisation"
	Then I should only be redirected on the CGU special link


## Roméo

### Scenario: Filtrer les avis avec 4 étoiles
	Given the user is on the product reviews page
	When the user selects the 4-star reviews filter
	Then only reviews with 4 stars should be displayed
	And the indicator for the 4-star filter should be activated


### Scenario: Partager un produit et copier le lien
    	Given the user is on the product detail page
	When the user clicks on the "Share" button
	And selects the "Copy link" option
	Then the product link should be copied to the clipboard
	And a confirmation message saying "Link copied" should be displayed


### Scenario: Filtrer les commentaires avec le mot-clé "excellent"
    	Given the user is on the product reviews page
	When the user enters "excellent" in the review search field
	And clicks the search button
	Then only comments containing the word "excellent" should be displayed
	And the keyword "excellent" should be highlighted in each displayed comment


