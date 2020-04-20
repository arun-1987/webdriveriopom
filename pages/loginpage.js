const helper = require('../utilities/helper')
const gconfig = require('../globalconfig')
class loginpage{


get username(){return $("//input[@id='email']")}
get password(){return $("//input[@id='passwd']")}
get signin(){return $("//button[@id='SubmitLogin']")}



/**
 * Function to navigate to login
 */
 login(){
    helper.performEnter(this.username,gconfig.username)
    helper.performEnter(this.password,gconfig.password)
    helper.performClick(this.signin)
 }


}

module.exports = new loginpage()