import { LoginPage } from "./pages/login_pages"
import { DashboardPage } from "./pages/dashboard_pages"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
const URL = 'https://www.saucedemo.com'

const username = 'standard_user'
const password = 'secret_sauce'
const invalid_password = 'invalidPass'

it('User successfully login with valid username and password ', () => {
    loginPage.login(URL, username, password)
    loginPage.assertLogin()
})

it('User fail to login when field password is incorrect', () => {
    loginPage.login(URL, username, invalid_password)
    loginPage.assertLoginFail()
})

it('User view detail product', () => {
    loginPage.login(URL, username, password)
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack()
})
