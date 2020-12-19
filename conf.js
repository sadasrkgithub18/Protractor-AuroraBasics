exports.config = 
{
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['LoginTest.js'],

  onPrepare: function() {
    browser.driver.manage().window().maximize();
   
  }
  
 
};