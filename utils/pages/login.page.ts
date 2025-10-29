import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly signInButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Use placeholder-based selector for reliability
    this.emailInput = page.locator('input[placeholder="Enter your email address"]');
    this.passwordInput = page.locator('input[placeholder="Enter your password"]');

    this.signInButton = page.getByRole('button', { name: 'Sign In' });
  }

  async goto() {
  await this.page.goto('http://test1.gotrade.goquant.io/', { timeout: 120000, waitUntil: 'domcontentloaded' });
  await this.page.waitForLoadState('networkidle');

}


  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);

    await this.signInButton.waitFor({ state: 'visible', timeout: 10000 });
    await this.signInButton.click();
  }
}
