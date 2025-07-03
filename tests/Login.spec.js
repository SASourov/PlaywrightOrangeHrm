import {test , expect } from "@playwright/test"

import { LoginPage } from "../Pages/LoginPage"

import { PimPage } from "../Pages/PimPage"

test('test' , async ({page}) => {
    const lp = new LoginPage(page)

    const pp = new PimPage(page)

    await lp.nagigateToUrl()

    // await lp.blankLogin()

    // await lp.loginWithInvalidUser()

    // await lp.loginWithInvalidPassword()

    await lp.validLoginFunctinality()

    await pp.completePimMenu()
})