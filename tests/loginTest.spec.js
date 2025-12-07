import { test, expect } from "@playwright/test";
import { LoginPage } from "../PageObjects/LoginPage.js";
import { HomePage } from "../PageObjects/HomePage.js";
import { SignInPage } from "../PageObjects/SignInPage.js"; // added import

const username = "7498778339";
const password = "AbhishekPunde";

// This test will open Amazon and perform the login steps
test("Login To amazon", async ({ page }) => {
  const loginPage = new LoginPage(page);


  // Step 1: Open the Amazon website
  await loginPage.openWebsite("https://www.amazon.in/");

  // Step 2: Enter username & password and log in
  await loginPage.loginToApplication(username, password);

  const homePage = new HomePage(page);
  await homePage.searchProductAndAddToCart("Gear Vintage Boxy 18");
});
