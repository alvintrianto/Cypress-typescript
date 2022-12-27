import { LoginPage } from "../page_object/login_pages"
import { SideMenu } from "../page_object/side_menu"

let loginPage = new LoginPage()
let sideMenu = new SideMenu()
const URL = 'https://www.saucedemo.com/'

it('Test Click Menu About', () => {
    loginPage.login(URL, 'standard_user', 'secret_sauce')
    loginPage.assertLogin()
    sideMenu.clickAbout()
})