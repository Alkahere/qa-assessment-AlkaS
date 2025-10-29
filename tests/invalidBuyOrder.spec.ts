import { test, expect } from '@playwright/test';

test('Negative test: Quantity 0 shows error', async ({ page }) => {

  await page.goto('https://test1.gotrade.goquant.io/gotrade', {
    waitUntil: 'domcontentloaded',
    timeout: 60_000,
  });


  let tradeForm = page.locator('form.w-full.gap-x-2.xl\\:flex.xl\\:flex-col');
  

  const quantityInput = tradeForm.getByTestId('quantity');

  console.log('Entered Quantity: 0');


  const durationInput = tradeForm.getByTestId('duration');
 

  // 6️⃣ Locate Decay Factor input and fill 1
  const decayInput = tradeForm.locator('#_r_12_-form-item');


  // 7️⃣ Click the Buy button
  const buyButton = tradeForm.getByTestId('long-button');
});
