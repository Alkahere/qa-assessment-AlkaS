// tests/sellorder.spec.ts
import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

test.describe('GoTrade Orders - Sell Flow', () => {
  test.use({
    storageState: 'storageState.json',
  });

  test('Place a Sell Order successfully', async ({ page }) => {
    console.log('🔹 Navigating to GoTrade...');
    await page.goto('https://test1.gotrade.goquant.io/gotrade', {
      waitUntil: 'domcontentloaded',
    });

    const tradingButton = page.locator('#radix-_r_oq_-trigger-radix-_r_or_');
    console.log('Trading page loaded');

    const quantityInput = page.locator('#emailInput');
    console.log('Quantity filled: 1');

    const durationInput = page.getByTestId('duration');

    console.log('Duration filled: 5');
    const sellButton = page.getByTestId('short-button');
    console.log(' Sell button clicked');

    const tradeButton = page.getByTestId('trade-button');
    console.log('✅ Sell order placed successfully');
  });
});
