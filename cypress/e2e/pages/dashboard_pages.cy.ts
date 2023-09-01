export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'

    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }
}