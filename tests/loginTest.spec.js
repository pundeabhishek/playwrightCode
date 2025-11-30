import { test, expect } from '@playwright/test';
import { LoginPage } from '../PageObjects/LoginPage'

// This test will open Amazon and perform the login steps
test('Login To amazon', async ({ page }) => {

    // Create a LoginPage object so we can use the login functions
    const loginPage = new LoginPage(page);

    // Step 1: Open the Amazon website
    await loginPage.OpenWebSite('https://www.amazon.in/');

    // Step 2: Enter username & password and log in
    await loginPage.LoginToApplication('PassUserId', 'PassPassword');

});
