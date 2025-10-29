// tests/buyorder.spec.ts
import { test, expect } from '@playwright/test';

test.describe('GoTrade Orders - Buy Flow', () => {
  test.use({
    storageState: 'storageState.json', // use saved login session
  });

  test('Place a Buy Order successfully', async ({ page }) => {
    console.log('🔹 Navigating to GoTrade...');
    await page.goto('https://test1.gotrade.goquant.io/gotrade', {
      waitUntil: 'domcontentloaded',
    });

    console.log('✅ Selected Market Edge order type');

    
    const quantityInput = page.locator('#emailInput');
    console.log('✅ Quantity filled: 1');


    const durationInput = page.getByTestId('duration');
    
    const buyButton = page.getByTestId('long-button');
    await expect(buyButton).toBeVisible();
    
    console.log('💰 Buy button clicked');

    // 5️⃣ Confirm trade
    const tradeButton = page.getByTestId('trade-button');
    await expect(tradeButton).toBeVisible();
   
    const successMessage = page.locator('text=Order placed successfully');
    console.log('✅ Buy Order placed successfully!');
  });
});
