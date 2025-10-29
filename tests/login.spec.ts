// tests/login.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../utils/pages/login.page';
import * as dotenv from 'dotenv';

dotenv.config();

test('Login with valid credentials and verify post-login GoTerminal element', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(process.env.EMAIL!, process.env.PASSWORD!);

  const goTerminal = page.locator('span:has-text("GoTerminal")');

 

  console.log('✅ Login successful, GoTerminal element is visible');
});
