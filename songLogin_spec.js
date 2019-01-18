// spec.js
describe('check login LoginAndHomepage', function() {
  var firstNumber = element(by.model('first'));

  beforeEach(function() {
    browser.get('http://192.168.89.216/login);
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Dashboard');
  });

});
  
