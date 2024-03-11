import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()

const URL = 'https://www.saucedemo.com/'

// it('Test buttom Add to chart homepage', () => {
//     loginPage.login(URL,'standard_user','secret_sauce')
//     loginPage.assertLogin() 

// })

// it('Test button Add to chart detail product with tap image', () => {
//     loginPage.login(URL,'standard_user','secret_sauce')
//     loginPage.assertLogin() 
    
// })

// it('Test button Add to chart detail product with tap name', () => {
//     loginPage.login(URL,'standard_user','secret_sauce')
//     loginPage.assertLogin() 

// })

it('Test success tap button Add to chart homepage', ()=>{
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin() 
    dashboardPage.AddTOChart_Homepage()
})

it('Test success tap button Add to chart Detail Image', ()=>{
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin() 
    dashboardPage.AddToChart_DetailImage()
})

it('Test success tap button Add to chart Detail Name', ()=>{
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin() 
    dashboardPage.AddToChart_DetailName()
})

it('Test timeout tap button Add to chart homepage', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin() 
    dashboardPage.TestTimeOut_AddToChart_Homepage()
})

