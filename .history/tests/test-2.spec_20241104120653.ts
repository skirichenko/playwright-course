import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/');
  await page.getByRole('link', { name: 'Sell With Us' }).nth(1).click();
  await page.getByPlaceholder('Your Full Name').click();
  await page.getByPlaceholder('Your Full Name').fill('tets  seller');
  await page.getByPlaceholder('Your Email Address').click();
  await page.getByPlaceholder('Your Email Address').fill('testseller@test.com');
  await page.getByPlaceholder('Your Phone Number').click();
  await page.getByPlaceholder('Your Phone Number').fill('+44009009009');
  await page.getByPlaceholder('Your Business Brand').click();
  await page.getByPlaceholder('Your Business Brand').fill('tetst brand');
  await page.getByPlaceholder('Please Describe Your Business').click();
});