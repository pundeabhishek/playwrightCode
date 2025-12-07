import { BasePage } from './BasePage.js';

// This class contains all steps needed for the Login page
export class LoginPage extends BasePage {

  constructor(page) {
    super(page);

    this.navToLoginField = page.locator('[data-nav-ref="nav_ya_signin"]');
    this.userName        = page.locator('[name="email"]');
    this.continueBtn     = page.locator('[aria-labelledby="continue-announce"]');
    this.password        = page.locator('[name="password"]');
    this.signInBtn       = page.locator('#signInSubmit');
  }

  async openWebsite(strURL) {
    // You could also use BasePage.goto(strURL) if you want:
    // await this.goto(strURL);
    await this.goto(strURL);
  }

  async loginToApplication(strUserName, strPassword) {
    await this.click(this.navToLoginField);
    await this.typeText(this.userName, strUserName);
    await this.click(this.continueBtn);
    await this.typeText(this.password, strPassword);
    await this.click(this.signInBtn);
  }
}
