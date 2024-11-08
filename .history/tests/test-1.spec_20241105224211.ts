import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/login');
  await page.getByRole('main').getByPlaceholder('Please Enter Your Email').click();
});