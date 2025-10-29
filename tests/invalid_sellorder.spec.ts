import { test, expect } from '@playwright/test';

test('Negative test: Sell order with Quantity 0 shows error', async ({ page }) => {

  await page.goto('https://test1.gotrade.goquant.io/gotrade', {
    waitUntil: 'domcontentloaded',
    timeout: 60_000,
  });

  const tradeForm = page.locator('form.w-full.gap-x-2.xl\\:flex.xl\\:flex-col');

  const quantityInput = tradeForm.getByTestId('quantity');
  console.log('Entered Quantity: 0');
  const durationInput = tradeForm.getByTestId('duration');

  const sellButton = tradeForm.getByTestId('short-button');
});
