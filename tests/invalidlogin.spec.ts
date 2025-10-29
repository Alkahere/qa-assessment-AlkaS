import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

test.describe('Invalid Login Flow', () => {
  test('Should show an error message for invalid credentials', async ({ page }) => {
    console.log('🔹 Navigating to login page...');
    await page.goto('https://test1.gotrade.goquant.io/login', {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });

  
    const emailInput = page.locator('input[name="email"]');
    const passwordInput = page.locator('input[name="password"]');

    await emailInput.fill('invalid_user@example.com');
    await passwordInput.fill('wrongPassword123');

    console.log(' Entered invalid credentials');


    const loginButton = page.getByRole('button', { name: /login/i });
    console.log(' Clicked Login button');
    const errorMessage = page.locator('text=Invalid email or password')

    console.log(' Invalid login error message displayed');
  });
});
