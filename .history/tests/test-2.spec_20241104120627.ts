import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/');
  await page.getByRole('link', { name: 'Sell With Us' }).nth(1).click();
  await page.getByPlaceholder('Your Full Name').click();
});