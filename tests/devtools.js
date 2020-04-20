const assert = require('assert')

describe('JSON.org page', () => {
    before(() => {
        browser.enablePerformanceAudits()
    })

    it('should load within performance budget', () => {

        browser.url('https://www.google.com/')

        let metrics = browser.getMetrics()
        console.log(metrics)
        console.log('The google performance score is : ',browser.getPerformanceScore())
      
    })

    after(() => {
        browser.disablePerformanceAudits()
    })
})