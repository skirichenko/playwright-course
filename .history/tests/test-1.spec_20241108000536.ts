import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/');
  await page.getByPlaceholder('Search Products').click();
  await page.getByPlaceholder('Search Products').pressSequentially('cucumber');
  await page.getByRole('link', { name: 'MARINATED CUCUMBERS NEZHIN STYLE $' }).click();
  await expect(page.getByRole('heading', { name: 'MARINATED CUCUMBERS NEZHIN' })).toBeVisible();
  await expect(page.getByRole('main')).toContainText('$120');
});