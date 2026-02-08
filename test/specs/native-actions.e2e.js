import { browser } from '@wdio/globals'

describe('Native Actions', () => {
    describe('Package Multiple tests', () => {

        beforeEach(async() =>{
            //activate the app
            driver.execute('mobile: activateApp ',{
                appId: 'io.appium.android.apis'
            })
        })

        afterEach(async() =>{
            //terminate the app
            driver.execute('mobile: terminateApp ',{
            appId: 'io.appium.android.apis'
            })
        })

        it('Test1', async () => {
            await $('~App').click()
            await browser.pause(2000)
        })
        it('Test2', async () => {
            await $('~Content').click()
            await browser.pause(2000)
        })
        it('Test3', async () => {
            await $('~Media').click()
            await browser.pause(2000)
        })
    })  

     it('Activity', async () => {
            await driver.execute('mobile: startActivity', {
            component: 'io.appium.android.apis/.app.AlarmController'
        })
            await expect($('~This demonstrates how to schedule and handle one-shot and repeating alarms.')).toBeDisplayed()
        })

    it('Activity', async () => {
            await $('~Views').click()
            await driver.performActions([
                {
                    type: 'pointer',
                    id: 'finger1',
                    parameters:{pointerType: 'touch'},
                    actions:[
                        {type: 'pointerMove', duration: 0, x:500, y:1200},
                        {type: 'pointerDown', button: 0},
                        {type: 'pause', duration:500},
                        {type: 'pointerMove', duration:1000, x:500, y:200},
                        {type: 'pointerUp', button: 0}
                    ]
                }
            ])
            await driver.releaseActions()
            await browser.pause(2000)
    })

        it('Accept Alert', async () => {
           await $('~App').click()
           await $('~Alert Dialogs').click()
           await $('id=io.appium.android.apis:id/two_buttons').click()
           await driver.acceptAlert()
           await browser.pause(2000)
         })

        it('Dismiss Alert', async () => {
           await $('~App').click()
           await $('~Alert Dialogs').click()
           await $('id=io.appium.android.apis:id/two_buttons').click()
           await driver.dismissAlert()
           await browser.pause(2000)
         })

        it.only('Activity', async () => {
            await driver.execute('mobile: startActivity', {
            component: 'io.appium.android.apis/.app.SearchInvoke'
        })
        await $('id=io.appium.android.apis:id/txt_query_prefill').click()
        await browser.pause(2000)
        await driver.hideKeyboard()
        await browser.pause(2000)
    }) 
})