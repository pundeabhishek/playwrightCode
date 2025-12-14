import { test, expect } from '@playwright/test';
test.skip('Practice form test', async ({ page }) => {
// #dropdown
//[id="dropdown"]
  await page.goto('https://ganneesh.github.io/Playwright_Framework/#home');
  await page.locator('#dropdown').selectOption('Two');
  await page.screenshot({ path: 'screenshot/form.png', fullPage: true }); 

})
test('Grab The Text from UI', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');

//   await page.locator('div[class="practice-form-wrapper"] >h5').waitFor()
//   const strText = await page.locator('div[class="practice-form-wrapper"] >h5').textContent()
//   console.log(strText);
await page.getByPlaceholder('First Name').screenshot({path:'screenshot/firstName.png'}); //SCreenshot of the element 
await page.getByPlaceholder('First Name').fill('Abhishek'); // How do we use semantic locators
await page.screenshot({ path: 'screenshot/form2.png', fullPage: true });

})