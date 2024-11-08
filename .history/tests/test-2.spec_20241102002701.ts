import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/');
  await page.getByRole('link', { name: 'Contact Us' }).nth(1).click();
  await page.getByPlaceholder('You Full Name').click();
  await page.getByPlaceholder('You Full Name').fill('test123');
  await page.getByPlaceholder('Your Email Address').click();
  await page.getByPlaceholder('Your Email Address').fill('test121314@uuu.com');
  await page.getByPlaceholder('Please Describe Your Message').click();
  await page.getByPlaceholder('Please Describe Your Message').fill('1st playwright test');
});