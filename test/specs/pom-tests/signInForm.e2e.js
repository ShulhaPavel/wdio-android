import HomePage from "../../page-objects/Screens/homeScreen";
import SignInForm from "../../page-objects/Forms/signInForm";
// import GaragePage from "../../page-objects/pages/garagePage"
import { activateApp, terminateApp } from "../../helpers/appStatesHelpers";
import { users } from "../test-data/credentials";

describe('Form validation', () => {

    beforeEach(async() => {
        // driver.execute('mobile: activateApp ',{
        //         appId: 'com.hillelAuto'
        //     })
        await activateApp('com.hillelAuto')
        await HomePage.openSignInForm();
    })

    afterEach(async() => {
        // driver.execute('mobile: terminateApp ',{
        //         appId: 'com.hillelAuto'
        //     })
        await terminateApp('com.hillelAuto')
    })

    it.only('Email field validation', async () => {
        await SignInForm.setPassword('testTestTest')
        await SignInForm.clickLoginButton()

        await expect(await SignInForm.getEmailRequiredErrorMessage()).toBe('Email is required')
    })

    it('Password field validation', async () => {
        await SignInForm.setEmail('test@test.com')
        await SignInForm.clickLoginButton()

        await expect(await SignInForm.getPasswordErrorMessage()).toBe('Password is too short')
    })

    it('Email field incorrect format', async () => {
        await SignInForm.setEmail('fsdfsfdf')
        await SignInForm.setPassword('testTestTest')
        await SignInForm.clickLoginButton()

        await expect(await SignInForm.getEmailFormatErrorMessage()).toBe('Email is not valid')
    })

    it('Email and password fields incorrect', async () => {
        await SignInForm.setEmail(users.nonExistingUser.email)
        await SignInForm.setPassword(users.nonExistingUser.password)
        await SignInForm.clickLoginButton();

        await expect(await SignInForm.getWrongEmailOrPasswordError()).toBe('Wrong email or password')
    })

    it('Positive login', async () => {
        const garageTitle = await $('//android.widget.TextView[@text="Garage"]')
 
        await SignInForm.setEmail(users.mainUser.email)
        await SignInForm.setPassword(users.mainUser.password)
        await SignInForm.clickLoginButton()

        await expect(garageTitle).toBeDisplayed()
    })
})

// describe('Garage Page', () => {
//     it('Add car', async() => {
//         const emailField = await $('#signinEmail')
//         const passwordField = await $('#signinPassword')
//         const loginButton = await $('.modal-content .btn-primary')
//         const addCarButton = await $('.panel-page .btn-primary')
//         const brandField = await $('#addCarBrand')
//         const modelField = await $('#addCarModel')
//         const mileageField = await $('#addCarMileage')
//         const addCarModalButton = await $('.modal-content .btn-primary')
//         const pageContent = await $('.panel-page_content')

//         //login
//         await browser.url('https://guest:welcome2qauto@qauto.forstudy.space/')
//         await $('.header_signin').click();
//         await emailField.setValue('shulga.pavlo98+testUser@gmail.com')
//         await passwordField.setValue('Passwo@1')
//         await loginButton.click()

//         //add car
//         await addCarButton.click()
//         await brandField.selectByVisibleText('Porsche')
//         await $('#addCarBrand option[value="3: 4"]').waitForExist()
//         await browser.pause(1000)
//         await modelField.selectByVisibleText('Cayenne')
//         await $('#addCarModel option[value="6: 17"]').waitForExist()
//         await browser.pause(1000)
//         await mileageField.setValue('123')
//         await addCarModalButton.click()
//         await browser.pause(3000)

//         expect(pageContent).toBeDisabled()
//     })
// })