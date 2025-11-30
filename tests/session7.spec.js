//textContent()
//Assertion of toContainText()
//allTextContents()
//.watchFor()
// website : ('https://www.saucedemo.com')

import { test, expect } from '@playwright/test';
test('Order the product', async ({ page }) => {
    const username = page.locator('[id="user-name"]')
    const password = page.getByPlaceholder('Password');
    const login = page.getByLabel('Login');
    // page.locator('[data-test="login-button"]')
    const productHeading = page.locator('[data-test="inventory-item-name"]')

    await page.goto('https://www.saucedemo.com/');
    await username.fill('standard_user');
    await password.fill('secret_sauce');
    await login.click();
    await productHeading.nth(0).waitFor({state:'visible'})
    const productText = await productHeading.nth(0).textContent()
    // expect(productHeading.nth(0)).toContainText('abc')
    // console.log(productText)

})