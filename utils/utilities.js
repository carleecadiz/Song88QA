var utilities = function(){


  //USE THIS TO LOGIN TO SONG88
  this.loginToSong88 = function()
  {
    browser.get(browser.params.songUrl);
    browser.waitForAngular();
    element.all(by.id(browser.params.songUsernameIdXpath)).last().sendKeys('SDHRYS');
    element.all(by.id(browser.params.songPasswordIdXpath)).last().sendKeys('password');
    element(by.buttonText('Login')).click();
    browser.sleep(5000);
  }

  this.waitForVisibilityOf = function(element) {
    browser.wait(EC.visibilityOf(element), 10000).then(function() {
      // success handler
      expect(element.isDisplayed()).toBeTruthy();
    }, function(error) {
      expect(true).toBe(false);
    });
  }
}
