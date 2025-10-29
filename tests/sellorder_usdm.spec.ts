// tests/sellorder.spec.ts
import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

test.describe('GoTrade Orders - Sell Flow', () => {
  // Use saved login session
  test.use({
    storageState: 'storageState.json',
  });

  test('Place a Sell Order successfully', async ({ page }) => {
    console.log('🔹 Navigating to GoTrade...');
    await page.goto('https://test1.gotrade.goquant.io/gotrade', {
      waitUntil: 'domcontentloaded',
    });


    const tradingButton = page.locator('#radix-_r_oq_-trigger-radix-_r_or_');
    if (await tradingButton.isVisible()) {
      await tradingButton.click();
      console.log('📊 Trading button clicked, trading page opened.');
    } else {
      console.log('ℹ️ Trading button not visible, continuing...');
    }

  
    const quantityInput = page.locator('#emailInput');
    await expect(quantityInput).toBeVisible();
    await quantityInput.fill('1');
    console.log('✅ Quantity filled: 1');

    
    const durationInput = page.getByTestId('duration');
    if (await durationInput.isVisible()) {
      await durationInput.fill('5');
      console.log('Duration filled: 5');
    } else {
      console.log('ℹ Duration input not visible, skipping...');
    }

    const sellButton = page.getByTestId('short-button');
    await expect(sellButton).toBeVisible();
    await sellButton.click();
    console.log('💸 Sell button clicked');

    
    const tradeButton = page.getByTestId('trade-button');
    await expect(tradeButton).toBeVisible();
    await tradeButton.click();
    console.log('🚀 Trade confirmed');

  
    const successMessage = page.locator('text=Order placed successfully');
    await expect(successMessage).toBeVisible({ timeout: 10000 });
    console.log('✅ Sell Order placed successfully!');
  });
});
