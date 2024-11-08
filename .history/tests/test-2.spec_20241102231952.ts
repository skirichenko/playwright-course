import { test, expect } from '@playwright/test';

const users = ['test111@uuu.com', 'test222@uuu.com']

for (const user of users) {}
test('test', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/');
  await page.getByRole('link', { name: 'Contact Us' }).nth(1).click();
  await page.getByPlaceholder('You Full Name').click();
  await page.getByPlaceholder('You Full Name').fill('test123');
  await page.getByPlaceholder('Your Email Address').click();
  await page.getByPlaceholder('Your Email Address').fill('test123134@uuu.com');
  await page.getByPlaceholder('Please Describe Your Message').click();
  await page.getByPlaceholder('Please Describe Your Message').fill('1st playwright test');
  await page.getByRole('button', { name: 'Submit' }).click();
});
