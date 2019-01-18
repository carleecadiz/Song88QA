
var utils = require('./utils/utilities');

describe('Song 88: Dashboard Page', function() {
  var songDashboardPageTitle = element.all(by.xpath(browser.params.songDashboardPageTitleXpath));
  var song88Logo = element.all(by.xpath(browser.params.song88LogoXpath));
  var profileTitle = element(by.xpath(browser.params.ProfileTitleXpath));
  var dashboardTitle = element(by.xpath(browser.params.songDashboardPageTitleXpath));
  var dashboardTodaysBet = element(by.xpath(browser.params.dashboardTodaysBetXpath));
  var dashboardTotalBet = element(by.xpath(browser.params.dashboardTotalBetXpath));


it('Should Login to Account', function(){
  //browser.get(browser.params.songUrl);
  browser.get('http://192.168.89.216/login')
  browser.driver.manage().window().maximize();
  browser.waitForAngular();
  element.all(by.xpath(browser.params.songUsernameIdXpath)).last().sendKeys('SDHRYS');
  element.all(by.xpath(browser.params.songPasswordIdXpath)).last().sendKeys('password');
  element(by.buttonText('Login')).click();
  browser.sleep(5000)
  element(by.xpath(browser.params.songSecurityCodeFieldXpath)).sendKeys('123456');
  element(by.xpath(browser.params.songOneTimePinProceedXpath)).click();
  browser.sleep(5000)
  //expect(browser.getCurrentUrl()).toContain('http://192.168.89.216/account/profile')
  expect(profileTitle.isDisplayed()).toBe(true);
}) // END IT FUNCTION

 it('Should Access Dashboard Page', function(){
   browser.sleep(5000)
   element(by.xpath(browser.params.dashboardLinkXpath)).click();
   expect(dashboardTitle.isDisplayed()).toBe(true);

 })

 it('Should Check Dashboard Page Fields', function(){
   browser.sleep(5000)
   expect(dashboardTodaysBet.isDisplayed()).toBe(true);
   expect(dashboardTotalBet.isDisplayed()).toBe(true);

 })


}); // END DESCRIBE
