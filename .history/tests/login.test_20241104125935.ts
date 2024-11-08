import { test, expect } from '@playwright/test';


  test("tests login as admin", async ({ page }) => {
    await page.goto("https://shopdemo-alex-hot.koyeb.app/contact");
    await page.locator("h1").click()
    await page.locator("header li:nth-of-type(3) > a").click()
    await page.locator("header ul button:nth-of-type(1)").click()
    await page.locator("div.p-0 > div:nth-of-type(1) input").click()
    await page.locator("div.p-0 > div:nth-of-type(1) input").type("xotabu4@gmail.com");
    await page.locator("main div:nth-of-type(2) input").click()
    await page.locator("main div:nth-of-type(2) input").type("xotabu4@gmail.com");
    await page.locator("main button.custom-btn-primary > span").click()

    await expect(page.getByRole())
  });

