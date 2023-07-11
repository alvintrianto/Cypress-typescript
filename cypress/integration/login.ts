import { LoginPage } from "./pages/login_pages"
import { DashboardPage } from "./pages/dashboard_pages"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
const URL = 'https://www.saucedemo.com'

it('User successfully login with valid username and password ', () => {
    loginPage.login(URL, 'standard_user', 'secret_sauce')
    loginPage.assertLogin()
})

it('User fail to login when field password is incorrect', () => {
    loginPage.login(URL, 'standard_user', 'invalidPass')
    loginPage.assertLoginFail()
})

it('User view detail product', () => {
    loginPage.login(URL, 'standard_user', 'secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack()
})
