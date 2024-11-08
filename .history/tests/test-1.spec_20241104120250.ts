import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/contact');
  await page.getByPlaceholder('You Full Name').click();
  await page.getByPlaceholder('You Full Name').click();
});