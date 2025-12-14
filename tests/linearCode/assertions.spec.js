const { test, expect } = require('@playwright/test');

test.describe('Describe Block Name', () => {
 
  test.skip('Test Name', async ({ page }) => {

  // Step 1: Open Automation Exercise
  await page.goto('https://automationexercise.com/');
  await expect(page).toHaveTitle(/Automation Exercise/);

  await page.goto("https://google.com");
  await expect(page).toHaveTitle(/Google/);

  await page.goBack();
  await expect(page).toHaveURL('https://automationexercise.com/');

  await page.goForward();
 await expect(page).toHaveURL(/google\.com/);

  await page.reload();

  
});

test('Assertion Validation', async ({ page }) => {
  // Step 1: Open Automation Exercise
  await page.goto('https://automationexercise.com/');
  await expect(page).toHaveTitle(/Automation Exercise/);

  await expect(page.locator('.logo img')).toBeVisible();
  await expect(page.locator('div[id="cartModal"]')).toBeHidden();

  await page.locator('[data-parent="#accordian"]').first().click();

  await expect(page.locator('h2[class="title text-center"]').nth(0)).toHaveText('Features Items');
 
  const email = page.locator('#susbscribe_email')

  await expect(email).toBeEditable();

  await email.fill('test@example.com')
  await expect(email).toHaveValue('test@example.com')
  await email.focus();
  await expect(email).toBeFocused();


});

});