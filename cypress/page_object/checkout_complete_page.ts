export class CheckoutCompletePage{
    assertSuccessCheckout(){
        cy.get('.title').should('contain', 'Checkout: Complete')
        cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER')
        cy.get('.pony_express').should('be.visible')
    }
}