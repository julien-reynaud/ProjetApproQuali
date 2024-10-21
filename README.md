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
### Scenario: Search for a product and complete purchase 
	Given I navigate to the Amazon homepage 
	When I search for "laptop" using the search bar 
	And I select a product from the search results 
	And I add the product to the cart 
	Then I should see the product added to my cart 
	When I proceed to checkout 
	And I complete the purchase process 
	Then I should see a confirmation page for the order 

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
### Scénario : Changer la langue du site en allemand 
	Given I navigate to the Amazon homepage
	When I hover the language menu
	And I click on "modifier le pays/la région"
	And I select "Allemagne" in the country choice
	And I click on the button "Accéder au site Web"
	Then I should be redirected to the german website

### Scénario : Rentrer dans la catégorie romans de poésie
	Given I navigate to the Amazon homepage
	When I click on the "Livres" menu	
	And I hover "Roman et littérature"
	And I click on "Poésie"
	Then I should be redirected to the poetry books category

### Scénario : Supprimer un article de l'historique de navigation
	Given I am logged in and at the amazon homepage and I have searched for an article
	When I click on the "Account" menu
	And I click on the button "Historique de navigation"
	And I click on the button "Supprimer"
	Then the article should disapear from my history

### Scénario : Voir le baromètre des ventes en animalerie
	Given I navigate to the Amazon homepage
	And I click on the menu "Toutes"
	And I click on "Baromètre des ventes"
	And I click on "Animalerie"
	Then I should see the ranking of sold items for pets
	
