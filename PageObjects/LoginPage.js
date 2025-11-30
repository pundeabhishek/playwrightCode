import { BasePage } from './BasePage.js';

// This class contains all steps needed for the Login page
export class LoginPage extends BasePage {

   constructor(page) {
    // Connect this page with the browser page we are working on
    super(page);

    // Button that opens the login form
    this.navToLoginField = page.locator('[data-nav-ref="nav_ya_signin"]');

    // Box where we type the email/mobile number
    this.userName = page.locator('[name="email"]');

    // Button to go to the next step after typing username
    this.continueBtn = page.locator('[aria-labelledby="continue-announce"]');

    // Box where we type the password
    this.password = page.locator('[name="password"]');

    // Button to complete login
    this.signInBtn = page.locator('[id="signInSubmit"]');
   }

   // This function opens the website URL we give
   async OpenWebSite(strURL){
      await this.page.goto(strURL); 
   }

   // This function performs the full login process
   async LoginToApplication(strUserName, strPassword){

      // Step 1: Click on the “Sign In” button on the homepage
      await this.clickElement(this.navToLoginField);

      // Step 2: Type the user's email/phone number
      await this.typeTest(this.userName, strUserName);

      // Step 3: Click on the Continue button
      await this.clickElement(this.continueBtn);

      // Step 4: Type the user's password
      await this.typeTest(this.password, strPassword);

      // Step 5: Click on the final Sign-In button
      await this.clickElement(this.signInBtn);
   }
}
