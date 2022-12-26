import {LoginPage} from "./pages/login_pages";
import {DashboardPage} from "./pages/dashboard_pages";

let loginPage = new LoginPage();
let dashboardPage = new DashboardPage();
const URL = 'https://www.saucedemo.com/';

it('Test LOGIN', () => {
  loginPage.login(URL,'standard_user','secret_sauce');
  loginPage.assertLogin();
});

it('Test Sauce Demo Invalid Password', () => {
  loginPage.login(URL,'standard_user','invalidPass');
  loginPage.assertLoginFail();
});

it('Test Sauce Demo Sauce labs product backpack', () => {
  loginPage.login(URL,'standard_user','secret_sauce');
  loginPage.assertLogin();
  dashboardPage.sauceLabsBackpack();
});

it('Test Click Add Sauce Labs Backpack to Cart', () => {
  loginPage.login(URL,'standard_user','secret_sauce');
  loginPage.assertLogin();
  dashboardPage.assertAddToCart();
});

it('Test Add Sauce Labs Backpack to Cart And Go To Cart Page', () => {
  loginPage.login(URL,'standard_user','secret_sauce');
  loginPage.assertLogin();
  dashboardPage.assertGoToCart();
});

it('Test Checkout A Product', () => {
  loginPage.login(URL,'standard_user','secret_sauce');
  loginPage.assertLogin();
  dashboardPage.assertCheckoutProduct('Ary','Setiyawan','80351');
});