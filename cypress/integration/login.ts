import {LoginPage} from "../page_object/login_pages"
import {DashboardPage} from "../page_object/dashboard_pages"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
const URL = 'https://www.saucedemo.com/'

it('Test LOGIN', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin() 
})

it('Test Sauce Demo Invalid Password', () => {
    loginPage.login(URL,'standard_user','invalidPass')
    loginPage.assertLoginFail()
})

it('Test Sauce Demo Sauce labs product backpack', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack() 
})

it('Test Login With Locked Out User', () => {
    loginPage.login(URL, 'locked_out_user', 'secret_sauce')
    loginPage.assertLoginFail()
    loginPage.assertErrorMessage('Sorry, this user has been locked out.')
})