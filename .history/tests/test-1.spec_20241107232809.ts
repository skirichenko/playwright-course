import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/');
  await page.getByPlaceholder('Search Products').click();
  await page.getByPlaceholder('Search Products').fill('cucumber');
  await page.getByRole('link', { name: 'MARINATED CUCUMBERS NEZHIN STYLE $' }).click();
});