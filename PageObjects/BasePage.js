// BasePage.js
// Common reusable actions for all page objects

// @ts-check

export class BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    // Save the browser page so we can use it in all functions
    this.page = page;
    this.defaultTimeout = 20000;
  }

  /**
   * Always return a Locator.
   * You can pass:
   *  - a string selector: '[name="email"]'
   *  - or an existing Locator: page.locator('text=Login')
   *
   * @param {import('@playwright/test').Locator | string} target
   * @returns {import('@playwright/test').Locator}
   */
  getLocator(target) {
    return typeof target === 'string' ? this.page.locator(target) : target;
  }

  // 👉 Generic click
  /**
   * @param {import('@playwright/test').Locator | string} target
   * @param {any} [options]
   */
  async click(target, options) {
    const locator = this.getLocator(target);
    await locator.waitFor({ state: 'visible' });
    await locator.click(options);
  }

  // 👉 Generic fill (clears and types)
  /**
   * @param {import('@playwright/test').Locator | string} target
   * @param {string} value
   * @param {any} [options]
   */
  async fillText(target, value, options) {
    const locator = this.getLocator(target);
    await locator.waitFor({ state: 'visible' });
    await locator.fill(value, options);
  }

  // 👉 Backward-compatible alias for older code (typeTest → typeText)
  /**
   * @param {import('@playwright/test').Locator | string} target
   * @param {string} value
   * @param {any} [options]
   */
  async typeText(target, value, options) {
    await this.fillText(target, value, options);
  }

  // 👉 Type without clearing (like normal keyboard typing)
  /**
   * @param {import('@playwright/test').Locator | string} target
   * @param {string} value
   * @param {any} [options]
   */
  async type(target, value, options) {
    const locator = this.getLocator(target);
    await locator.waitFor({ state: 'visible' });
    await locator.type(value, options);
  }

  // 👉 Select option from <select> dropdown
  /**
   * @param {import('@playwright/test').Locator | string} target
   * @param {string | string[] | { label?: string; value?: string; index?: number } |
   *         Array<{ label?: string; value?: string; index?: number }>} values
   * @param {any} [options]
   */
  async selectOption(target, values, options) {
    const locator = this.getLocator(target);
    await locator.waitFor({ state: 'visible' });
    await locator.selectOption(values, options);
  }

  // 👉 Check a checkbox / radio (only if not already checked)
  /**
   * @param {import('@playwright/test').Locator | string} target
   * @param {any} [options]
   */
  async check(target, options) {
    const locator = this.getLocator(target);
    await locator.waitFor({ state: 'visible' });
    if (!(await locator.isChecked())) {
      await locator.check(options);
    }
  }

  // 👉 Uncheck a checkbox (only if checked)
  /**
   * @param {import('@playwright/test').Locator | string} target
   * @param {any} [options]
   */
  async uncheck(target, options) {
    const locator = this.getLocator(target);
    await locator.waitFor({ state: 'visible' });
    if (await locator.isChecked()) {
      await locator.uncheck(options);
    }
  }

  // 👉 Quick status helpers
  /**
   * @param {import('@playwright/test').Locator | string} target
   */
  async isVisible(target) {
    const locator = this.getLocator(target);
    return locator.isVisible();
  }

  /**
   * @param {import('@playwright/test').Locator | string} target
   */
  async isHidden(target) {
    const locator = this.getLocator(target);
    return locator.isHidden();
  }

  /**
   * @param {import('@playwright/test').Locator | string} target
   */
  async isChecked(target) {
    const locator = this.getLocator(target);
    return locator.isChecked();
  }

  // 👉 Get text of any element
  /**
   * @param {import('@playwright/test').Locator | string} target
   * @returns {Promise<string>}
   */
  async getText(target) {
    const locator = this.getLocator(target);
    await locator.waitFor({ state: 'visible' });
    const text = await locator.textContent();
    return text?.trim() ?? '';
  }

  /**
   * Get attribute value from an element
   * @param {import('@playwright/test').Locator | string} target
   * @param {string} attributeName
   * @returns {Promise<string | null>}
   */
  async getAttribute(target, attributeName) {
    const locator = this.getLocator(target);
    await locator.waitFor({ state: 'visible' });
    return locator.getAttribute(attributeName);
  }

  /**
   * Count elements matching a locator
   * @param {import('@playwright/test').Locator | string} target
   * @returns {Promise<number>}
   */
  async getElementCount(target) {
    const locator = this.getLocator(target);
    return locator.count();
  }

  // 👉 Wait helpers
  /**
   * @param {import('@playwright/test').Locator | string} target
   * @param {number} [timeout=10000]
   */
  async waitForVisible(target, timeout = 10000) {
    const locator = this.getLocator(target);
    await locator.waitFor({ state: 'visible', timeout });
  }

  /**
   * @param {import('@playwright/test').Locator | string} target
   * @param {number} [timeout=10000]
   */
  async waitForHidden(target, timeout = 10000) {
    const locator = this.getLocator(target);
    await locator.waitFor({ state: 'hidden', timeout });
  }

  // 👉 Hover
  /**
   * @param {import('@playwright/test').Locator | string} target
   * @param {any} [options]
   */
  async hover(target, options) {
    const locator = this.getLocator(target);
    await locator.waitFor({ state: 'visible' });
    await locator.hover(options);
  }

  // 👉 Press a keyboard key on an element (e.g. 'Enter', 'Tab')
  /**
   * @param {import('@playwright/test').Locator | string} target
   * @param {string} key
   * @param {any} [options]
   */
  async press(target, key, options) {
    const locator = this.getLocator(target);
    await locator.waitFor({ state: 'visible' });
    await locator.press(key, options);
  }

  // 👉 Page-level helpers
  /**
   * @param {string} url
   * @param {any} [options]
   */
  async goto(url, options) {
    await this.page.goto(url, { waitUntil: 'domcontentloaded', ...options });
  }

  /**
   * Wait until URL matches string or RegExp.
   * @param {string | RegExp} urlOrPattern
   * @param {number} [timeout=10000]
   */
  async waitForUrl(urlOrPattern, timeout = this.defaultTimeout) {
    await this.page.waitForURL(urlOrPattern, { timeout });
  }
}
