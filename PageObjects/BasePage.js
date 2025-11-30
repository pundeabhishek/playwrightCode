export class BasePage {
  constructor(page) {
    this.page = page;
  }

  // Functions

  async clickElement(locator) {
    await locator.waitFor({ state: 'visible' });
    await locator.click();
  }

  async typeTest(locator, text) {
  await locator.waitFor({ state: 'visible' });
    await locator.fill(text);
  }
}
