import HomePage from "../../page-objects/Screens/homeScreen";
import SignInForm from "../../page-objects/Forms/signInForm";
import GaragePage from "../../page-objects/Screens/garageScreen";
import { users } from "../test-data/credentials";

describe('Add New Car', () => {
    beforeEach(async() => {
        await HomePage.openSignInForm()
        await SignInForm.setEmail(users.mainUser.email)
        await SignInForm.setPassword(users.mainUser.password)
        await SignInForm.clickLoginButton()
        await browser.pause(2000)
    })

    it('Add car', async () =>{
        await GaragePage.clickAddCarButton()
        await browser.pause(2000)
        await GaragePage.setBrandField()
        await browser.pause(2000)
        await GaragePage.setModelField()
        await browser.pause(2000)
        await GaragePage.setMileageField('123')
        await browser.pause(2000)
        await GaragePage.clickAddButton()
        await GaragePage.verifyLastAddedCar('Porsche Cayenne')
    })
})