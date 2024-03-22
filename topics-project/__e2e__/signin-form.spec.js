// @ts-check

import { test, expect } from '@playwright/test';
import { createClient } from '@supabase/supabase-js';

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
  console.error('Supabase URL and Key are required!');
  process.exit(1); // Exits the process if the variables are not found
}

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

test('successfully sign into application', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await (await page.waitForSelector(`//*[text()='Sign In']`)).click();

  await page.locator('input[placeholder="Enter email"]').fill('jdoe@gmail.com');
  await page.locator('input[placeholder="Enter password"]').fill('test123');

  await page.getByRole('button', { name: /LOGIN/i }).click();

  const successAlert = await page.waitForSelector(`//*[contains(text(), 'Success!')]`);
  const isVisible = await successAlert.isVisible();
  expect(isVisible).toBeTruthy();
});