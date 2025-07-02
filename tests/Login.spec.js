import {test , expect } from "@playwright/test"

import { LoginPage } from "../Pages/LoginPage"

test('test' , async ({page}) => {
    const lp = new LoginPage(page)

    await lp.nagigateToUrl()

    await lp.loginWithInvalidUser()

    await lp.loginWithInvalidPassword()

    await lp.blankLogin()

    await lp.validLoginFunctinality()
})