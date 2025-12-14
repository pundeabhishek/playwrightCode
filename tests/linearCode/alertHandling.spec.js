import { test, expect } from '@playwright/test';

test('Handle all types of JavaScript popups', async ({ page }) => {
await page.goto('https://demo.automationtesting.in/Alerts.html');

page.once('dialog',async dialog => {
console.log(`Dialog message: ${dialog.message()}`);
await dialog.accept();
});


await page.locator('[class="btn btn-danger"]').click();


await page.locator('a[href="#CancelTab"]').click();

page.once('dialog',async dialog => {
console.log(`Dialog message: ${dialog.message()}`);
await dialog.dismiss();
})


await page.locator('[onclick="confirmbox()"]').click();

const text = await page.locator('#demo').textContent();
console.log(`Text after dismissing the alert: ${text}`);

await page.locator('a[href="#Textbox"]').click()

page.once('dialog',async dialog => {
console.log(`Dialog message: ${dialog.message()}`);
await dialog.accept('I am accepting the prompt'); 
});

await page.locator('[onclick="promptbox()"]').click();
const promptText = await page.locator('#demo1').textContent();
console.log(`Text after accepting the prompt: ${promptText}`);  


});
