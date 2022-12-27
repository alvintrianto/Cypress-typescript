import { LoginPage } from "../page_object/login_pages"
import { DashboardPage } from "../page_object/dashboard_pages"
import { CartPage } from "../page_object/cart_page"
import { CheckoutInfoPage } from "../page_object/checkout_info_page"
import { CheckoutOverviewPage } from "../page_object/checkout_overview_page"
import { CheckoutCompletePage } from "../page_object/checkout_complete_page"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let cartPage = new CartPage()
let checkoutInfo = new CheckoutInfoPage
let checkoutOverview = new CheckoutOverviewPage
let checkoutComplete = new CheckoutCompletePage
const URL = 'https://www.saucedemo.com/'

it('Test Checkout Sauce Labs Backpack', () => {
    loginPage.login(URL, 'standard_user', 'secret_sauce')
    loginPage.assertLogin()

    dashboardPage.addToCartSauceLabsBackpack()
    dashboardPage.assertShopingCartBadge()
    dashboardPage.clickShopingCartLink()

    cartPage.clickCheckout()

    checkoutInfo.assertPageTitle()
    checkoutInfo.inputFirstName('Jamal')
    checkoutInfo.inputLastName('Musiala')
    checkoutInfo.inputPostalCode('12345')
    checkoutInfo.clickContinue()

    checkoutOverview.assertPageTitle()
    checkoutOverview.assertItem()
    checkoutOverview.clickFinish()

    checkoutComplete.assertSuccessCheckout()
})