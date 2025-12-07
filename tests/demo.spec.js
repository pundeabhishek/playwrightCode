import { test, expect } from "@playwright/test";
import { SignInPage } from "../PageObjects/SignInPage.js";
import { ProductListPage } from "../PageObjects/ProductListPage.js";

const demoEmail = "abhishekpunde28@gmail.com";
const demoPassword = "Mypassword";

test.describe("AutomationExercise demo (POM)", () => {
  test("add to cart from product list shows cart modal", async ({ page }) => {
    const signIn = new SignInPage(page);
    const products = new ProductListPage(page);

    await signIn.open("https://automationexercise.com/login");
    await signIn.login(demoEmail, demoPassword);
    await products.open("https://automationexercise.com/");

    // add product id 1 and assert modal visible
    await products.addToCartByProductId(1);
    expect(await products.isCartModalVisible()).toBeTruthy();
  });

  test("view product details navigates to product page", async ({ page }) => {
    const signIn = new SignInPage(page);
    const products = new ProductListPage(page);

    await signIn.open();
    await signIn.login(demoEmail, demoPassword);
    await products.open();

    await products.viewProductById(2);
    // RegExp (regex) pattern to match any URL containing /product_details/2
    // Pattern: /product_details\/2/ means: match "product_details", then /, then "2"
    // The \ (backslash) escapes the / so it's treated as literal text, not a regex operator
    // Works with any domain or query parameters: https://example.com/product_details/2?sort=price
    await expect(page).toHaveURL(/product_details\/2/);
  });

  test("logoiTest", async ({ page }) => {
    const signIn = new SignInPage(page); // use page object
    await signIn.open("https://automationexercise.com/login");
    await signIn.login("abhishekpunde28@gmail.com", "Mypassword");

    await expect(page.getByText("Logout")).toBeVisible();
  });
  });
