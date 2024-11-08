import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/sell');
  await page.getByPlaceholder('Your Full Name').click();
  await page.getByPlaceholder('Your Full Name').fill('https://shopdemo-alex-hot.koyeb.app/sell');
  await page.getByPlaceholder('Your Full Name').press('ControlOrMeta+a');
  await page.getByPlaceholder('Your Full Name').fill('test seller');
  await page.getByPlaceholder('Your Email Address').click();
  await page.getByPlaceholder('Your Email Address').fill('testseller@gmail.com');
});