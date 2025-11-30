import {test , expect} from '@playwright/test';
import {LoginPage} from '../pageObjects/LoginPage.js';

test('Login To amazon', async ({page})=>{
    const loginPage = new LoginPage (page);
    await loginPage.OpenWebSite('https://www.amazon.in/');
    await loginPage.LoginToApplication('7498778339', 'AbhishekPunde');

});
