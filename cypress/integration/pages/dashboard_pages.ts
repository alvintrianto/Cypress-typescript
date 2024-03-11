export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'
    inventory_details_name = 'Sauce Labs Backpack'

    TestTimeOut_AddToChart_Homepage(){
        cy.wait(600000) 
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.get('[data-test="error"]').should('be.visible')
        cy.contains("Epic sadface: You can only access '/inventory-item.html' when you are logged in.")
    }

    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }

    AddTOChart_Homepage(){
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_badge').should('be.visible')
    }

    AddToChart_DetailImage(){
        cy.get('#item_4_img_link > .inventory_item_img').click()
        cy.get('.inventory_details_img').should('be.visible')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_badge').should('be.visible')
    }

    AddToChart_DetailName(){
        cy.get('#item_4_title_link > .inventory_item_name').click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_badge').should('be.visible')
    }


}