const Loginpage = require('../pages/loginpage')
const Homepage = require('../pages/homepage')
const allureReporter = require('@wdio/allure-reporter').default
describe("LoginValidation",function(){
    it("verifyhomepage",function(){
        allureReporter.addFeature("verifyhomepage")
        Homepage.launchApplication("http://automationpractice.com/index.php")
        expect(browser).toHaveUrl("http://automationpractice.com/index.php")
        var title = Homepage.getPageTitle()
        console.log('The page title is',title)
        expect(title).toEqual("My Store")
    })

    it("verifyloginpage",function(){
        allureReporter.addFeature("verifyloginpage")
        browser.url('/')
        browser.maximizeWindow()
        Homepage.navigateToLogin()
        Loginpage.login()
    })

})