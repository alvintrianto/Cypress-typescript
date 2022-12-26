export class DashboardPage{
  link_sauceLabsBackpack = 'Sauce Labs Backpack';
  txt_firstName = '#first-name';
  txt_lastName = '#last-name';
  txt_zip = '#postal-code';

  inputFirstName(firstName: string){
    cy.get(this.txt_firstName).type(firstName);
  }
  inputLastName(lastName: string){
    cy.get(this.txt_lastName).type(lastName);
  }
  inputZip(zip: string){
    cy.get(this.txt_zip).type(zip);
  }

  sauceLabsBackpack(){
    cy.contains(this.link_sauceLabsBackpack).click();
    cy.contains('Sauce Labs Backpack').should('be.visible');
  }

  assertAddToCart(){
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('#remove-sauce-labs-backpack').should('be.visible');
    cy.get('.shopping_cart_badge').should('be.visible');
  }

  assertGoToCart(){
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').click();
    cy.get('.inventory_item_name').should('be.visible');
    cy.get('.inventory_item_name').should('contain','Sauce Labs Backpack');
  }

  assertCheckoutProduct(firstName: string, lastName: string, zip: string){
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').click();
    cy.get('#checkout').click();
    this.inputFirstName(firstName);
    this.inputLastName(lastName);
    this.inputZip(zip);
    cy.get('#continue').click();
    cy.get('.inventory_item_name').should('contain','Sauce Labs Backpack');
  }
}