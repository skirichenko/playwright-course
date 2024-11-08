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
