export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'
    button_sidemenu = 'Open Menu'

    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }

    about(){
        cy.contains(this.button_sidemenu).click()
        cy.get('[id="about_sidebar_link"]').click()
        cy.url().should('include', 'saucelabs.com')
        cy.get('.nav-image').should('be.visible')
    }

    addToCartSauceLabsBackpack(){
        cy.get('[id="add-to-cart-sauce-labs-backpack"]').click()
    }

    assertShopingCartBadge(){
        cy.get('.shopping_cart_badge').should('contain', '1')
    }

    clickShopingCartLink(){
        cy.get('.shopping_cart_link').click()
    }
}