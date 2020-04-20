import Page from './page'
const helper = require('../utilities/helper')
const allureReporter = require('@wdio/allure-reporter').default
class homepage extends Page{

  get signin(){return $("//a[@class='login']")}
  launchApplication(url) {
    super.open(url)
  }
    
    getPageTitle(){
      return  helper.getPageTitle()
    }

    navigateToLogin(){
        helper.performClick(this.signin)
        allureReporter.addStep("Navigate to Loginpage")
    }
    
}
module.exports = new homepage()