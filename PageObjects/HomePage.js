import { BasePage } from './BasePage.js';

// This class contains all steps needed for the Home page
export class HomePage extends BasePage {

  constructor(page) {
    super(page);
    this.searchbox = page.locator('#twotabsearchtextbox');
    this.searchbutton = page.locator('#nav-search-submit-button');
    this.firstProduct = page.locator('button[name="submit.addToCart"][aria-label="Add to cart"]').first();
    this.goToCartBtn = page.getByText('Go to Cart');
    this.decrementBtn = page.locator('[data-a-selector="decrement"]').first();
  }

  // 👉 Make it async and await the actions
  async searchProductAndAddToCart(strProductName) {
    await this.fillText(this.searchbox, strProductName);
    await this.click(this.searchbutton);
    await this.click(this.firstProduct);
    await this.click(this.goToCartBtn);
    await this.click(this.decrementBtn);
    

  }
}
