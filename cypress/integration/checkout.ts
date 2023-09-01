import { CheckoutPage } from "./pages/checkout_pages"
import { LoginPage } from "./pages/login_pages"

let loginPage = new LoginPage()
let checkoutPage = new CheckoutPage()
const URL = 'https://www.saucedemo.com'

const username = 'standard_user'
const password = 'secret_sauce'
const firstname = 'pau'
const lastname = 'zia'
const postalcode = '2839283'

it('User success checkout 1 product', () => {
  loginPage.login(URL, username, password)
  loginPage.assertLogin()
  checkoutPage.checkout(firstname, lastname, postalcode)
  checkoutPage.finishOrder()
  checkoutPage.assertSuccessCheckout()
})

it('Verify user fail to continue checkout when First Name is empty', () => {
  loginPage.login(URL, username, password)
  loginPage.assertLogin()
  checkoutPage.checkout('', lastname, postalcode)
  checkoutPage.assertNameInformationFail()
})