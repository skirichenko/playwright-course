import { test, expect } from '@playwright/test';

test('user can submit contact us form', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/contact');
  await page.getByPlaceholder('You Full Name').fill('test123');
  await page.getByPlaceholder('Your Email Address').fill(Date.now() + '@uuu.com');
  await page.getByPlaceholder('Please Describe Your Message').fill('1st playwright test');
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.getByRole('heading', {
    name: 'We receved your message, we will reach you on your email address'})).toBeVisible()
  await expect(page.getByRole('generic', {
    name: 'We receved your message, we will reach you on your email address'})).not.toBeVisible()

  await expect(page.getByPlaceholder('You Full Name')).toBeEmpty()
  
});


test('user cannot submit contact us form with the same email', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/contact');
  await page.getByPlaceholder('You Full Name').fill('test123');
  await page.getByPlaceholder('Your Email Address').fill('test@test.com');
  await page.getByPlaceholder('Please Describe Your Message').fill('1st playwright test');
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.getByRole('heading', {
    name: 'Please try again'})).toBeVisible()
  await expect(page.getByText('A request already existed for same email address')).toBeVisible()

  await expect(page.getByPlaceholder('You Full Name')).not.toBeEmpty()
});
