// This class contains common actions that all pages will use
export class BasePage {

  constructor(page) {
    // Save the browser page so we can use it in all functions
    this.page = page;
  }

  // 👉 Function to click anything on the page
  async clickElement(locator) {
    // Wait until the element is visible on the screen
    await locator.waitFor({ state: 'visible' });

    // Click the element
    await locator.click();
  }

  // 👉 Function to type text into any input box
  async typeTest(locator, text) {
    // Wait until the input box is visible
    await locator.waitFor({ state: 'visible' });

    // Type the given text inside it
    await locator.fill(text);
  }
}
