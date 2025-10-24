import { test, expect } from '@playwright/test';
import { LoginPage } from '../utils/pages/login.page';
import * as dotenv from 'dotenv';

dotenv.config();

test('Login with valid credentials and verify onboarding popup', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(process.env.EMAIL!, process.env.PASSWORD!);

  const popup = page.locator('h3:text("Welcome to GoTrade!")');
  await expect(popup).toBeVisible({ timeout: 15000 });

  const getStarted = page.locator('[data-testid="onboard-get-started"] span:text("Get Started")');
  await expect(getStarted).toBeVisible();

  console.log(' Login successful');
});
