export class CheckoutOverviewPage{
    assertPageTitle(){
        cy.get('.title').should('contain', 'Checkout: Overview')
    }
    assertItem(){
        cy.get('.cart_quantity').should('contain', '1')
        cy.get('.inventory_item_name').should('contain', 'Sauce Labs Backpack')
        cy.get('.inventory_item_price').should('contain', '29.99')
    }
    clickFinish(){
        cy.get('[id="finish"]').click()
    }
}