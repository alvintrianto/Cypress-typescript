import { CheckoutPage } from "./pages/checkout_pages"
import { LoginPage } from "./pages/login_pages"

let loginPage = new LoginPage()
let checkoutPage = new CheckoutPage()
const URL = 'https://www.saucedemo.com'

it('User success checkout 1 product', () => {
  loginPage.login(URL, 'standard_user', 'secret_sauce')
  loginPage.assertLogin()
  checkoutPage.checkout('zia', 'zia', '09928')
  checkoutPage.finishOrder()
  checkoutPage.assertSuccessCheckout()
})

it('Verify user fail to continue checkout when First Name is empty', () => {
  loginPage.login(URL, 'standard_user', 'secret_sauce')
  loginPage.assertLogin()
  checkoutPage.checkout('', 'zia', '09928')
  checkoutPage.assertNameInformationFail()
})