import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();

test('Add Binance USDⓈ-M account successfully', async ({ page }) => {

  await page.goto('https://test1.gotrade.goquant.io/admin');
  console.log('Navigated to Accounts page');


  const addAccountButton = page.getByRole('button', { name: /add account/i });
  console.log('Clicked Add Account button');


  await page.getByRole('tab', { name: /Binance USDⓈ-M/i });
  console.log('Selected Binance USDⓈ-M option');


  await page.waitForSelector('[placeholder="Enter your Binance USDⓈ-M API Key"]', { timeout: 15000 });
const apiKeyInput = page.locator('[placeholder="Enter your Binance USDⓈ-M API Key"]');
await apiKeyInput.fill(process.env.BINANCE_USDM_KEY!);

  const apiSecretInput = page.locator('[placeholder="Enter your Binance USDⓈ-M secret key"]');
  const accountNameInput = page.locator('[placeholder="Enter your account name"]');

  await apiKeyInput.fill(process.env.BINANCE_USDM_KEY!);
  await apiSecretInput.fill(process.env.BINANCE_USDM_SECRET!);
  await accountNameInput.fill('USDM_API');
  console.log('Filled in API details');


  const submitButton = page.getByTestId('button-submit-account');
  await submitButton.click();
  console.log('Clicked Submit button');



  console.log('✅ Binance USDⓈ-M account added successfully');
});
