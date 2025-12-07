import { BasePage } from './BasePage.js';

export class SignInPage extends BasePage {
  constructor(page) {
    super(page);
    // Login form
    this.loginEmail = page.locator('input[data-qa="login-email"]');
    this.loginPassword = page.locator('input[data-qa="login-password"]');
    this.loginButton = page.locator('button[data-qa="login-button"]');

    // Signup form (included for convenience)
    this.signupName = page.locator('input[data-qa="signup-name"]');
    this.signupEmail = page.locator('input[data-qa="signup-email"]');
    this.signupButton = page.locator('button[data-qa="signup-button"]');

    // Common container to wait for the page/form
    this.formSection = page.locator('section#form');
  }

  // Navigate to the sign-in page
  async open(url = 'https://automationexercise.com/login') {
    await this.goto(url);
    await this.waitForVisible(this.formSection);
  }

  // Perform login using the visible inputs and button
  async login(email, password) {
    await this.waitForVisible(this.loginEmail);
    await this.fillText(this.loginEmail, email);
    await this.fillText(this.loginPassword, password);
    await this.click(this.loginButton);
  }

  // Perform signup (basic)
  async signup(name, email) {
    await this.waitForVisible(this.signupName);
    await this.fillText(this.signupName, name);
    await this.fillText(this.signupEmail, email);
    await this.click(this.signupButton);
  }
}
