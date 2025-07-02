exports.LoginPage = class Login{
    constructor(page){
        this.page = page

        this.userName = page.locator("//input[@placeholder='Username']")
        this.password = page.locator("//input[@placeholder='Password']")
        this.loginBtn = page.locator("//button[normalize-space()='Login']")
    }

    async nagigateToUrl(){
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await this.page.waitForTimeout(1000)
    }

    async loginWithInvalidUser(){
        await this.userName.fill("Amin")
        await this.page.waitForTimeout(1000)

        await this.password.fill("admin123")
        await this.page.waitForTimeout(1000)

        await this.loginBtn.click()
        await this.page.waitForTimeout(3000)
    }

    async loginWithInvalidPassword(){
        await this.userName.fill("Admin")
        await this.page.waitForTimeout(1000)

        await this.password.fill("admin12333")
        await this.page.waitForTimeout(1000)

        await this.loginBtn.click()
        await this.page.waitForTimeout(3000)
    }

    async blankLogin(){
        await this.userName.fill("")
        await this.page.waitForTimeout(1000)

        await this.password.fill("")
        await this.page.waitForTimeout(1000)

        await this.loginBtn.click()
        await this.page.waitForTimeout(3000)
    }


    async validLoginFunctinality(){
        await this.userName.fill("Admin")
        await this.page.waitForTimeout(1000)

        await this.password.fill("admin123")
        await this.page.waitForTimeout(1000)

        await this.loginBtn.click()
        await this.page.waitForTimeout(3000)
    }
}