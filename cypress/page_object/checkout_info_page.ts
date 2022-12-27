export class CheckoutInfoPage{
    assertPageTitle(){
        cy.get('.title').should('contain', 'Checkout: Your Information')
    }
    inputFirstName(firstname: string){
        cy.get('[id="first-name"]').type(firstname)
    }
    inputLastName(lastname: string){
        cy.get('[id="last-name"]').type(lastname)
    }
    inputPostalCode(postalcode: string){
        cy.get('[id="postal-code"]').type(postalcode)
    }
    clickContinue(){
        cy.get('[value="Continue"]').click()
    }
}