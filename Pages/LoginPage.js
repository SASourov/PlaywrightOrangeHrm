const { expect } = require("@playwright/test")
const path = require("path")

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

    async blankLogin(){
        await this.userName.fill("")
        await this.page.waitForTimeout(1000)

        await this.password.fill("")
        await this.page.waitForTimeout(1000)

        await this.loginBtn.click()
        await this.page.waitForTimeout(3000)

        
        const visibleTxt = this.page.locator("//div[@class='orangehrm-login-form']//div[2]//div[1]//span[1]")
        await expect(visibleTxt).toHaveText("Required")
        console.log("Your error message is : ",  await visibleTxt.textContent())
    }

    async loginWithInvalidUser(){
        await this.userName.fill("Amin")
        await this.page.waitForTimeout(1000)

        await this.password.fill("admin123")
        await this.page.waitForTimeout(1000)

        await this.loginBtn.click()
        await this.page.waitForTimeout(3000)

        const visibleTxt = this.page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']")
        await expect(visibleTxt).toHaveText("Invalid credentials")
        console.log("Your error message is : ",  await visibleTxt.textContent())

    }

    async loginWithInvalidPassword(){
        await this.userName.fill("Admin")
        await this.page.waitForTimeout(1000)

        await this.password.fill("admin12333")
        await this.page.waitForTimeout(1000)

        await this.loginBtn.click()
        await this.page.waitForTimeout(3000)

        const visibleTxt = this.page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']")
        await expect(visibleTxt).toHaveText("Invalid credentials")
        console.log("Your error message is : ", await visibleTxt.textContent())
    }

    async validLoginFunctinality(){
        await this.userName.fill("Admin")
        await this.page.waitForTimeout(1000)

        await this.password.fill("admin123")
        await this.page.waitForTimeout(1000)

        await this.loginBtn.click()
        await this.page.waitForTimeout(3000)

        const pageTitle = await this.page.title()
        await expect(pageTitle).toBe("OrangeHRM")
        console.log("Your page title is :" , pageTitle)
        await this.page.waitForTimeout(3000)
        
        await this.page.screenshot({path: "Screenshot/ss1.png", fullPage: true})

    }
}