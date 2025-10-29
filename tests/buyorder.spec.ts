import { test, expect } from '@playwright/test';

test.use({ storageState: 'storageState.json' });

test('Invalid Buy Order - Quantity <= 0 should show validation error', async ({ page }) => {
  console.log('🔹 Navigating to GoTrade...');
  await page.goto('https://test1.gotrade.goquant.io/gotrade', { waitUntil: 'domcontentloaded', timeout: 90000 });

  // 1️⃣ Ensure the Trading panel is ready
  const tradingButton = page.locator('#radix-_r_oq_-trigger-radix-_r_or_');

  console.log('✅ Trading panel detected.');

  // 2️⃣ Click Market-Edge (if required before order input)
  const marketEdgeButton = page.locator('button:has-text("Market-Edge")');
  if (await marketEdgeButton.isVisible()) {
    console.log('✅ Clicked Market-Edge button.');
  }

  // 3️⃣ Detect iframe (if present)
  const frame = page.frame({ url: /gotrade/ });
  const context = frame ?? page;
  console.log(frame ? 'Inside iframe context' : ' Using main page context.');

  // 4️⃣ Wait for quantity input to appear
  const quantityInput = context.locator('#emailInput');
  const durationInput = context.locator('[data-testid="duration"]');

  await quantityInput.waitFor({ state: 'visible', timeout: 20000 });
  await durationInput.waitFor({ state: 'visible', timeout: 20000 });
  console.log(' Quantity and Duration inputs are visible.');

  // 5️⃣ Fill invalid values
  await quantityInput.fill('-1');
  await durationInput.fill('0');
  console.log('⚠️ Entered invalid values for Quantity (-1) and Duration (0).');

  // 6️⃣ Click Buy and then Trade buttons
  const buyButton = context.getByTestId('long-button');
  await buyButton.click();
  console.log('🟩 Clicked Buy button.');

  const tradeButton = context.getByTestId('trade-button');
  await tradeButton.click();
  console.log('🟩 Clicked Trade button.');

  // 7️⃣ Expect validation message
  const errorMessage = context.locator('p:text("Quantity must be greater than 0")');
  await expect(errorMessage).toBeVisible({ timeout: 8000 });
  console.log('✅ Validation error displayed successfully.');
});
