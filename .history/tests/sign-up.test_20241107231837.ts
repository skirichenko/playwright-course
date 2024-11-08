import { test, expect } from '@playwright/test';

test('user can sign up', async ({ page }) => {
  
const email = Date.now() + '@test.com'
await page.goto('https://shopdemo-alex-hot.koyeb.app/register');
await page.getByRole('link', { name: 'Welcome! ' }).click();
await page.getByRole('main').getByPlaceholder('Please Enter Your Email').fill();
await page.getByPlaceholder('Please Enter Your First Name').fill('test1');
await page.getByPlaceholder('Please Enter Your Last Name').fill('test2');
await page.getByPlaceholder('Please Enter Your Password').fill('test+12312312343@test.com');
await expect(page.getByRole('heading', { name: 'Account Details' })).toBeVisible();

});