class helper{

    /**
     * write your own methods which can be used for browser actions
     */
    performClick(element){
        expect(element).toBeClickable()
        element.click();
    }

    performEnter(element,value){
        expect(element).toBeVisible()
        element.setValue(value);
    }


    getPageTitle(){
        return browser.getTitle();
    }

 

}
module.exports = new helper()