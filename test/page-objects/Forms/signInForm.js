class SignInForm {

    get emailField(){
        return $('android=new UiSelector().className("android.widget.EditText").instance(0)')
    }  

    get passwordField(){
        return $('android=new UiSelector().className("android.widget.EditText").instance(1)')
    } 

    get emailFieldRequiredError(){
        return $('android=new UiSelector().text("Email is required")')
    }

    get emailFieldIncorrectFormatError(){
        return $('//android.widget.TextView[@text="Email is not valid"]')
    }

    get passwordFieldErrorMessage(){
        return $('android=new UiSelector().text("Password is too short")')
    }

    get loginButton(){
        return $('//android.widget.TextView[@text="Login"]')
    }

    get wrongEmailOrPasswordError(){
        return $('android=new UiSelector().text("Wrong email or password")')
    }

    async setEmail(email){
        await this.emailField.setValue(email)
    }

    async setPassword(password){
        await this.passwordField.setValue(password)
    }

    async clickLoginButton(){
        await this.loginButton.click()
    }

    async getWrongEmailOrPasswordError(){
       return await this.wrongEmailOrPasswordError.getText()
    }

    async getEmailRequiredErrorMessage(){
        return await this.emailFieldRequiredError.getText()
    }

    async getEmailFormatErrorMessage(){
        return await this.emailFieldIncorrectFormatError.getText()
    }

    async getPasswordErrorMessage(){
       return await this.passwordFieldErrorMessage.getText()
    }

}

export default new SignInForm()