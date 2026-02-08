class GaragePage{
    get addCarButton(){
        return $('android=new UiSelector().text("Add Car")')
    }

    get brandDropdown(){
        return $('~Audi')
    }

    get modelDropdown(){
        return $('~911')
    }

    get mileageField(){
        return $('android.widget.EditText')
    }

    get addButton(){
        return $('android=new UiSelector().text("Add")')
    }

    get lastAddedCarName(){
        return $('android=new UiSelector().text("Porsche Cayenne")')
    }

    async verifyLastAddedCar(text){
        await expect(await this.lastAddedCarName.getText()).toBe(text);
    }

    async setMileageField(value){
        await this.mileageField.setValue(value)
    }

    async clickAddCarButton(){
        await this.addCarButton.click()
    }

    async setBrandField(){
        await this.brandDropdown.click()
        await driver.action('pointer')
            .move({ duration: 0, x: 174, y: 1186 })
            .down({ button: 0 })
            .pause(50)
            .up({ button: 0 })
            .perform(); //{skipRelease: true}
    }

    async setModelField(){
        await this.modelDropdown.click()
        await driver.action('pointer')
            .move({ duration: 0, x: 197, y: 1224 })
            .down({ button: 0 })
            .pause(50)
            .up({ button: 0 })
            .perform(); //{skipRelease: true}
    }

    async clickAddButton(){
        await this.addButton.click()
    }
}

export default new GaragePage()