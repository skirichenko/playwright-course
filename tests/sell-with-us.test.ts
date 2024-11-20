import { test, expect } from '@playwright/test';

test('user can submit `Become A MERN Store Seller!` form', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/sell');
  await page.getByPlaceholder('Your Full Name').fill('test seller');
  await page.getByPlaceholder('Your Email Address').fill(Date.now() + '@gmail.com');
  await page.getByPlaceholder('Your Phone Number').fill('1231231231');
  await page.getByPlaceholder('Your Business Brand').fill('test business');
  await page.getByPlaceholder('Please Describe Your Business').fill('test test testc');
  await page.getByRole('button', { name: 'Submit' }).click();
  
  await expect(page.getByPlaceholder('Your Full Name')).toBeEmpty();
  await expect(page.getByRole('heading', {
    name: 'We received your request! we will reach you on your phone number'})).toBeVisible()
  
  
});
