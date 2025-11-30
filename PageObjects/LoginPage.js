import { BasePage } from './BasePage.js';

export class LoginPage extends BasePage{
   constructor(page){
    super(page);
    this.navToLoginField = page.locator('[data-nav-ref="nav_ya_signin"]');
    this.userName = page.locator('[name="email"]')
    this.continueBtn = page.locator('[aria-labelledby="continue-announce"]')  
    this.password = page.locator('[name="password"]')
    this.signInBtn = page.locator('[id="signInSubmit"]')
   }

   async OpenWebSite(strURL){
   await this.page.goto(strURL); 
   }

   async LoginToApplication(strUserName, strPassword){

   await this.clickElement(this.navToLoginField);
   await this.typeTest(this.userName, strUserName);
   await this.clickElement(this.continueBtn);
   await this.typeTest(this.password, strPassword);
   await this.clickElement(this.signInBtn);

   }



}