export class CartPage{
    clickCheckout(){
        cy.get('[id="checkout"]').click()
    }
}