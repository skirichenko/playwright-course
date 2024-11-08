import { test, expect } from '@playwright/test';


  test("tests login as admin", async ({ page }) => {
    await page.goto('https://shopdemo-alex-hot.koyeb.app/login');
    await page.locator("div.p-0 > div:nth-of-type(1) input").fill("xotabu4@gmail.com");
    await page.locator("main div:nth-of-type(2) input").fill("xotabu4@gmail.com");
    await page.locator("main button.custom-btn-primary > span").click()
    await page.waitForTimeout(3000);
    await expect(page.getByRole('heading', { name: 'Login' })).not.toBeVisible()
    //assert not working
  });

  
await page.goto('https://shopdemo-alex-hot.koyeb.app/login');


await page.getByRole('main').getByPlaceholder('Please Enter Your Email').fill('xotabu4@gmail.com');
await page.getByRole('main').getByPlaceholder('Please Enter Your Email').press('Enter');
await page.getByPlaceholder('Please Enter Your Password').click();
await page.getByPlaceholder('Please Enter Your Password').fill('xotabu4@gmail.com');
await page.getByRole('button', { name: 'Login' }).click();