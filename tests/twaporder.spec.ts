import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

test.describe('GoTrade Orders - TWAP-Edge Order Flow', () => {
  test.use({
    storageState: 'storageState.json',
  });

  test.beforeEach(async ({ page }) => {
    await page.goto('https://test1.gotrade.goquant.io/gotrade', {
      waitUntil: 'networkidle',
      timeout: 30000,
    });
    await expect(page).toHaveURL(/gotrade/);
  });

  test('Place a TWAP-Edge Order successfully', async ({ page }) => {
    const testData = {
      interval: '10',
      decay: '1',
      quantity: '1',
      duration: '5',
    };

    await page.getByTestId('GOTRADE_ORDERTYPE_TWAP_EDGE')
    const intervalInput = page.getByTestId('interval');
  
    await intervalInput.fill(testData.interval);
    const decayInput = page.getByTestId('decay-factor');
    await expect(decayInput).toBeVisible({ timeout: 5000 });
    await decayInput.fill(testData.decay);

    const quantityInput = page.getByTestId('quantity');
    await expect(quantityInput).toBeVisible({ timeout: 5000 });
    await quantityInput.fill(testData.quantity);

    const durationInput = page.getByTestId('duration');
    await expect(durationInput).toBeVisible({ timeout: 5000 });
    await durationInput.fill(testData.duration);

    const buyButton = page.getByTestId('long-button');
    await expect(buyButton).toBeVisible({ timeout: 5000 });
    await buyButton.click();

    const tradeButton = page.getByTestId('trade-button');
    await expect(tradeButton).toBeVisible({ timeout: 10000 });
    await tradeButton.click();

    const successMessage = page.getByText('Order placed successfully');
    await expect(successMessage).toBeVisible({ timeout: 10000 });
  });

  test.afterEach(async ({ page }) => {
  });
});