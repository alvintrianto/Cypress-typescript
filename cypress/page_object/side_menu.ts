export class SideMenu {
    clickAbout() {
        cy.contains('Open Menu').click()
        cy.get('[id="about_sidebar_link"]').click()
        cy.url().should('include', 'saucelabs.com')
        cy.get('.nav-image').should('be.visible')
    }
}