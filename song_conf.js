let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var jasmineReporters = require('jasmine-reporters');

var reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'my-report.html'
});
exports.config = {

  jasmineNodeOpts: {
    defaultTimeoutInterval: 2500000
   },



  suites: {
    //LoginAndHomepage: '**/*LoginAndHomepage_spec.js',
    //Runner: '**/*Runner.js',

    Dashboard: '**/*Dashboard_spec.js',
    Login:  '**/*SongLogin_spec.js',

    all_song: [
      '**/*Dashboard_spec.js',
      '**/*SongLogin_spec.js',


    ]
  },

  params: {
    songUrl: 'http://192.168.89.216/login', //SONG88 URL
    securityCodeUrl: 'http://192.168.89.216/security-code',
    songDashboardUrl: 'http://192.168.89.216/dashboard', //DASHBOARD URL
    songDashboardPageTitleXpath: '//*/div[2]/nav/ol/li', //DASHBOARD TITLE BY XPATH
    songUsernameIdXpath: '//*/div/form/div[1]/div/input', //SONG88 USERNAME FIELD BY XPATH
    songPasswordIdXpath: '//*/div/form/div[2]/div/input', //SONG88 PASSSWORD FIELD BY xpath
    songCaptchaLoginXpath: '//*/div/form/div[3]/div/div[1]/div/input', //SONG88 LOGIN CAPTCH BY XPATH
    songSecurityCodeFieldXpath: '//*[@id="securityCode"]', //SONG88 SECURITY CODE BY XPATH
    songOneTimePinProceedXpath: '//*/div/div/form/div[2]/div/button', //ONE TIME PIN PROCEED BUTTON BY XPATH
    ProfileTitleXpath: '//*/main/div[2]/nav/ol/li', //PROFILE HEADER TITLE BY XPATH
    song88LogoXpath: '//*[@id="root"]/div/header/a/img', //SONG88 LOGO BY XPATH
    dashboardLinkXpath: '//*/div/ul/li[1]/a', //DASHBOARD PANEL LINK BY XPATH
    dashboardTodaysBetXpath: '//*/main/div[3]/div/div[1]/div/div/div/h5',
    dashboardTotalBetXpath: '//*/main/div[3]/div/div[2]/div/div/div[1]/h5',





     },

     capabilities: {
       'browserName': 'chrome',
       //'chromeOptions': {
        //args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
      //
     },
       framework: 'jasmine2',
       onPrepare: function() {
         var browserName = browser.driver.session_.value_.caps_.map_.get("browserName");
         var junitReporter = new jasmineReporters.JUnitXmlReporter({
             savePath: 'target/junit/' + browserName + "/",
             consolidateAll: true
         });
         jasmine.getEnv().addReporter(junitReporter);

           jasmine.getEnv().addReporter(new SpecReporter({
               spec: {
                   displayStacktrace: true
               }
           }));
           browser.ignoreSynchronization = true;
           jasmine.getEnv().addReporter(reporter);
       },
       beforeLaunch: function() {
           return new Promise(function(resolve) {
               reporter.beforeLaunch(resolve);
           });
       },
       afterLaunch: function(exitCode) {
           return new Promise(function(resolve) {
               reporter.afterLaunch(resolve.bind(this, exitCode));
           });
       }
    };
