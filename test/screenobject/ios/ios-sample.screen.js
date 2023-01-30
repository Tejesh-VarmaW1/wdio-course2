class LoginPage{
    get usernameField(){
        return $('~test-Username')
    }

    get passwordField(){
        return $('~test-Password')
    }

    get loginBtn(){
        return $('~test-LOGIN')
    }

    async login(username,password){
        await this.usernameField.setValue(username)
        await  this.passwordField.setValue(password)
        await this.loginBtn.click()
    }
}

export default new LoginPage()