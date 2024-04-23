// @ts-check

import { test, expect } from '@playwright/test';

test('successfully sign into application', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await (await page.waitForSelector(`//*[text()='Sign In']`)).click();

  await page.locator('input[placeholder="Enter email"]').fill('jdoe@gmail.com');
  await page.locator('input[placeholder="Enter password"]').fill('test123');

  await page.getByRole('button', { name: /LOGIN/i }).click();

  await page.waitForURL('http://localhost:3000/home')
  expect(page.url()).toBe('http://localhost:3000/home');
});