class HomePage {
    get signInButton(){
        return $('android=new UiSelector().text("Sign in")')
    }

    async openSignInForm(){
        await this.signInButton.click()
    }
}

export default new HomePage(); 