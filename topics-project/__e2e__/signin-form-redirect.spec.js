// @ts-check
import { test, expect } from '@playwright/test';

test('successfully sign into application and redirect to /home', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await (await page.waitForSelector(`//*[text()='Sign In']`)).click();

  await page.locator('input[placeholder="Enter email"]').fill('mansij@gmail.com');
  await page.locator('input[placeholder="Enter password"]').fill('password');

  await page.getByRole('button', { name: /LOGIN/i }).click();

  const successAlert = await page.waitForSelector(`//*[contains(text(), 'Success!')]`);
  const isVisible = await successAlert.isVisible();
  expect(isVisible).toBeTruthy();

  // Check if the page is redirected to /home after login
  await expect(page).toHaveURL('http://localhost:3000/home');
});
