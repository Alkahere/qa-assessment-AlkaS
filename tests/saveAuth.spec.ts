// tests/saveAuth.spec.ts
import { test } from '@playwright/test';
import { LoginPage } from '../utils/pages/login.page';
import * as dotenv from 'dotenv';

dotenv.config();

test('Save authentication state', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Go to login page
  await loginPage.goto();

  // Login using credentials from .env
  await loginPage.login(process.env.EMAIL!, process.env.PASSWORD!);

  // Immediately save storage state to file
  await page.context().storageState({ path: 'storageState.json' });
  console.log('✅ Auth state saved to storageState.json');
});
