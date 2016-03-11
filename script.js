/*var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();*/

/*
driver.get('http://vk.com/');
driver.findElement(By.id('quick_email')).sendKeys(credentials.login);
driver.findElement(By.id('quick_pass')).sendKeys(credentials.password);
driver.findElement(By.id('quick_login_button')).click();
driver.wait(false, 50000);
//driver.quit();
*/


var PageObject = require('page-object');

var LoginPage = PageObject.extend({
  PageObject.url('http://vk.com/')

  var emailBox = PageObject.email('quick_email');
  var passwordBox = PageObject.password('quick_pass');
  var submitButton = PageObject.submit('quick_login_button');
});

var ResultsPage = PageObject.extend({
  var title = PageObject.title();
});


var credentials = {
    login: 'tverezo@gmail.com',
    password: '0987654321'
};

var WebDriver = require('selenium-webdriver');
var Assert = require('assert');

var driver = new WebDriver.Builder().withCapabilities({'browserName': 'firefox'}).build();

var loginPage = new LoginPage(driver).visit();
loginPage.emailBox = credentials.login;
loginPage.password = credentials.password;
loginPage.submitButton().click();

var resultsPage = new ResultsPage(driver);

resultsPage.title().then(function(title) {
  Assert.equal('some title', title);
});
