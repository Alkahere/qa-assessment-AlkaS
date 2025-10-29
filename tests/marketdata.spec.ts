import { test, expect } from '@playwright/test';

test('Market data updates in real time', async ({ page }) => {
  await page.goto('https://test1.gotrade.goquant.io/terminal');

  const priceElement = page.locator('[data-testid="live-price"]');
  const initialPrice = await priceElement.textContent();


  await page.waitForTimeout(5000);
  const updatedPrice = await priceElement.textContent();

  expect(initialPrice).not.toEqual(updatedPrice);
  console.log('Market data updated successfully from', initialPrice, 'to', updatedPrice);
});
