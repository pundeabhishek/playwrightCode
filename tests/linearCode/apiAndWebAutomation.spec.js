const { test, expect } = require('@playwright/test');
import '../hooks/testHooks.js';
import { getToken } from '../../utils/authStore.js';


test('API and Web Automation Integration Test', async ({ browser }) => {


  const context = await browser.newContext();
  const page = await context.newPage();

  // Inject token into browser context local storage
  await page.addInitScript(token => {
    window.localStorage.setItem('token', token);
  }, getToken());

  await page.goto('https://rahulshettyacademy.com/client/');
  await page.waitForLoadState('networkidle');
  const products = await page.locator('[class="card-body"]').count();
  console.log(`Number of products displayed on the UI: ${products}`);


});



// await page.fill('#userEmail', 'abhishekpunde28@gmail.com');
// await page.fill('#userPassword', 'AbhishekPunde@29');
// await page.click('#login'); 