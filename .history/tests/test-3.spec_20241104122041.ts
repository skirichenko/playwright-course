import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/sell');
  await page.getByPlaceholder('Your Full Name').click();
  await page.getByPlaceholder('Your Full Name').fill('https://shopdemo-alex-hot.koyeb.app/sell');
  await page.getByPlaceholder('Your Full Name').press('ControlOrMeta+a');
  await page.getByPlaceholder('Your Full Name').fill('test seller');
  await page.getByPlaceholder('Your Email Address').click();
  await page.getByPlaceholder('Your Email Address').fill(Date.now() + 'testseller@gmail.com');
  await page.getByPlaceholder('Your Phone Number').click();
  await page.getByPlaceholder('Your Phone Number').fill('1231231231');
  await page.getByPlaceholder('Your Business Brand').click();
  await page.getByPlaceholder('Your Business Brand').fill('test business');
  await page.getByPlaceholder('Please Describe Your Business').click();
  await page.getByPlaceholder('Please Describe Your Business').fill('test test testc');
  await page.getByRole('button', { name: 'Submit' }).click();
});