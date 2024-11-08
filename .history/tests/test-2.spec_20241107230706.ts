import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
await page.goto('https://shopdemo-alex-hot.koyeb.app/');
await page.getByRole('link', { name: 'Welcome! ' }).click();
await page.getByRole('menuitem', { name: 'Sign Up' }).click();

});