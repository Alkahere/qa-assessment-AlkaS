import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();

test('Add Binance COIN-M account successfully', async ({ page }) => {
  await page.goto('https://test1.gotrade.goquant.io/admin');

 
  console.log(' Selected Binance Coin-M option');
  const accountNameInput = page.locator('[name="accountName"]');
  const apiKeyInput = page.getByTestId('input-api-key');
  const apiSecretInput = page.getByTestId('input-api-secret');

  // await accountNameInput.waitFor({ state: 'visible', timeout: 10000 });
  // await apiKeyInput.waitFor({ state: 'visible', timeout: 10000 });
  // await apiSecretInput.waitFor({ state: 'visible', timeout: 10000 });
  console.log('All input fields are visible');
  await accountNameInput.fill('Binance COIN-M Account');
  await apiKeyInput.fill(process.env.BINANCE_COINM_KEY!);
  await apiSecretInput.fill(process.env.BINANCE_COINM_SECRET!);
  

  // 6️⃣ Submit the form
  const submitButton = page.getByTestId('button-submit-account');
  await submitButton.waitFor({ state: 'visible' });
  await submitButton.click();
  console.log('Clicked Add Account button');

  console.log('🎉 Binance COIN-M account added successfully');
});
