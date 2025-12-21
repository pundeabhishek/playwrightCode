import { test, expect, request } from '@playwright/test';

let preLoggedIncontext;

test.beforeAll(async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://rahulshettyacademy.com/client/');
    await page.fill('#userEmail', 'abhishekpunde28@gmail.com');
    await page.fill('#userPassword', 'AbhishekPunde@29');
    await page.click('#login');
    await page.waitForLoadState('networkidle');

    await context.storageState({ path: 'sessionStorage.json' });
    preLoggedIncontext = await browser.newContext({storageState: 'sessionStorage.json'});


})

test('Login Using Session Storage', async ({  }) => {
    console.log('Starting Login Using Session Storage Test');

    const page = await preLoggedIncontext.newPage();

    await page.goto('https://rahulshettyacademy.com/client/');
    await page.waitForLoadState('networkidle'); 
    const products = await page.locator('[class="card-body"]').count();
    console.log(`Number of products displayed on the UI: ${products}`);


})


