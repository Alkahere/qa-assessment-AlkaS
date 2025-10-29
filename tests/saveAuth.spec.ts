import { test, expect } from '@playwright/test';
import { LoginPage } from '../utils/pages/login.page';
import * as dotenv from 'dotenv';

dotenv.config();

test('Save authentication state', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(process.env.EMAIL!, process.env.PASSWORD!);

  const exchangeButton = page.locator('[data-testid="exchange-selector-trigger"]');
  await page.context().storageState({ path: 'storageState.json' });
  console.log('✅ Auth state saved to storageState.json');
});
