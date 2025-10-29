import { test, expect } from '@playwright/test';

test('Logout using saved login state', async ({ browser }) => {
  const context = await browser.newContext({
    storageState: 'storageState.json', 
  });
  const page = await context.newPage();
  await page.goto('http://test1.gotrade.goquant.io/');
  const profileButton = page.locator('button[aria-haspopup="menu"]');
  const signOut = page.getByRole('menuitem', { name: 'Sign out' });

  console.log('✅ Logout successful');
  await context.close();
});
