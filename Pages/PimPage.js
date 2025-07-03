exports.PimPage = class Pim{
    constructor (page) {
        this.page = page

        this.pimMenu = page.locator('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a')
        this.employeeName = page.locator("//div[@class='oxd-autocomplete-text-input oxd-autocomplete-text-input--focus']//input[@placeholder='Type for hints...']")
        this.employeeId = page.locator("//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']")
        this.employeeType= page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[3]/div/div[2]/div/div/div[2]')
        this.include = page.locator("//div[contains(text(),'Current Employees Only')]")
        this.supervisorName = page.locator("(//input[@placeholder='Type for hints...'])[2]")
        this.jobTitle = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[7]/div/div[2]/div/div/div[2]/i')
        this.searchBtn = page.locator("//button[normalize-space()='Search']")
    }

    async completePimMenu(){
        await this.pimMenu.click()
        await this.page.waitForTimeout(1000)

        await this.employeeId.fill("0464")
        await this.page.waitForTimeout(1000)

        await this.employeeType.click()
        await this.page.keyboard.press("ArrowDown")
        await this.page.keyboard.press("ArrowDown")
        await this.page.keyboard.press("Enter")
        await this.page.waitForTimeout(1000)

        await this.include.click()
        await this.page.keyboard.press("ArrowDown")
        await this.page.keyboard.press("ArrowDown")
        await this.page.keyboard.press("Enter")
        await this.page.waitForTimeout(1000)

        await this.supervisorName.fill("Test")
        await this.page.waitForTimeout(1000)

        await this.jobTitle.click()
        await this.page.keyboard.press("ArrowDown")
        await this.page.keyboard.press("ArrowDown")
        await this.page.keyboard.press("Enter")
        await this.page.waitForTimeout(1000)

        await this.searchBtn.click()
        await this.page.waitForTimeout(3000)
        await this.page.screenshot({path : "Screenshot/PimPage.png", fullPage : true})
        await this.page.waitForTimeout(3000)
    }
}