import { BasePage } from './BasePage.js';

export class ProductListPage extends BasePage {
  constructor(page) {
    super(page);
    this.featuresItems = page.locator('.features_items');
    this.searchResultItem = page.locator('.product-image-wrapper');
    // Arrow function (id) => allows us to pass dynamic product ID at runtime
    // When called: this.addToCartButton(5) will find element with data-product-id="5"
    // Template literal ${id} injects the ID value into the CSS selector
    // .first() handles strict mode - multiple elements may have same data-product-id
    this.addToCartButton = (id) => page.locator(`a.add-to-cart[data-product-id="${id}"]`).first();
    // Same pattern: viewProductLink(3) finds link to /product_details/3
    // Arrow functions defer execution until called, making selectors dynamic
    this.viewProductLink = (id) => page.locator(`a[href="/product_details/${id}"]`);
    this.cartModal = page.locator('#cartModal');
    this.cartButtonTop = page.locator('a[href="/view_cart"]');
    this.logoutLink = page.locator('a[href="/logout"]');
    this.signupLoginLink = page.getByText('Signup / Login');
  }

  async open(url = 'https://automationexercise.com/') {
    await this.goto(url);
    await this.waitForVisible(this.featuresItems);
  }

  async addToCartByProductId(id) {
    await this.waitForVisible(this.featuresItems);
    const btn = this.addToCartButton(id);
    await this.waitForVisible(btn);
    await this.click(btn);
    await this.waitForVisible(this.cartModal);
  }

  async isCartModalVisible() {
    return this.isVisible(this.cartModal);
  }

  async viewProductById(id) {
    const link = this.viewProductLink(id);
    await this.waitForVisible(link);
    await this.click(link);
    // wait until URL contains product_details/id to ensure navigation completed
    await this.waitForUrl(new RegExp(`/product_details/${id}`));
  }

  async goToCart() {
    await this.waitForVisible(this.cartButtonTop);
    await this.click(this.cartButtonTop);
    await this.page.waitForLoadState('networkidle');
  }

  async logout() {
    await this.waitForVisible(this.logoutLink);
    await this.click(this.logoutLink);
    await this.page.waitForLoadState('networkidle');
  }

  async isSignedOut() {
    return this.isVisible(this.signupLoginLink);
  }
}
