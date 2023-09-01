export class CheckoutPage {
  btn_add_to_cart = '#add-to-cart-sauce-labs-backpack'
  id_product = '#item_4_title_link'
  btn_cart = '#shopping_cart_container'
  btn_remove_product = '#remove-sauce-labs-backpack'
  btn_checkout = '#checkout'
  btn_continue = '#continue'
  txt_firstname = '#first-name'
  txt_lastname = '#last-name'
  txt_postalcode = '#postal-code'
  btn_finish = '#finish'
  btn_back_to_home = '#back-to-products'
  txt_alert_empty_name = 'Error: First Name is required'
  txt_alert_error = '[data-test="error"]'
  text_complete_header = '.complete-header'
  text_complete_text = '.complete-text'

  clickAddtoCart() {
    cy.get(this.btn_add_to_cart).click()
  }

  clickMenuCart() {
    cy.get(this.btn_cart).click()
    cy.get(this.id_product).should('be.visible')
  }

  clickCheckout() {
    cy.get(this.btn_checkout).click()
  }

  clickContinue() {
    cy.get(this.btn_continue).click()
  }

  clickFinish() {
    cy.get(this.btn_finish).click()
  }

  inputFirstname(firstname: string | null) {
    if (firstname !== null && firstname !== '') {
      cy.get(this.txt_firstname).type(firstname);
    }
  }

  inputLastname(lastname: string | null) {
    if (lastname !== null && lastname !== '') {
      cy.get(this.txt_lastname).type(lastname);
    }
  }

  inputPostalCode(postalcode: string | null) {
    if (postalcode !== null && postalcode !== '') {
      cy.get(this.txt_postalcode).type(postalcode);
    }
  }

  assertSuccessCheckout() {
    cy.get(this.btn_back_to_home).should('be.visible')
    cy.get(this.text_complete_header).should('be.visible')
    cy.get(this.text_complete_text).should('be.visible')

  }

  assertNameInformationFail() {
    cy.get(this.txt_alert_error).should('be.visible')
    cy.get(this.txt_alert_error).should('contain', this.txt_alert_empty_name)
  }

  add_to_cart() {
    this.clickAddtoCart()
    this.clickMenuCart()
  }

  checkout(fisrtname: string | null, lastname: string | null, postalcode: string | null) {
    this.add_to_cart()
    this.clickCheckout()
    this.inputFirstname(fisrtname)
    this.inputLastname(lastname)
    this.inputPostalCode(postalcode)
    this.clickContinue()
  }

  finishOrder() {
    this.clickFinish()
  }






}