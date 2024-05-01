// @ts-check

import { test, expect } from '@playwright/test';

test('sign up new user', async ({ page }) => {

  await page.goto('http://localhost:3000');
  await (await page.waitForSelector(`//*[text()='START TODAY']`)).click();

  const randomString = Math.random().toString(36).substring(2, 10);
  const randomEmail = `jdoe${randomString}@gmail.com`;

  await page.getByPlaceholder('Enter your name').fill('John Doe');
  await page.getByPlaceholder('Enter your email').fill(randomEmail);
  await page.getByPlaceholder('Create a password').fill('test123');
  await page.getByPlaceholder('Confirm password').fill('test123');
  expect(await page.getByPlaceholder('Enter your name').inputValue()).toBe('John Doe');
  expect(await page.getByPlaceholder('Enter your email').inputValue()).toBe(randomEmail);
  expect(await page.getByPlaceholder('Create a password').inputValue()).toBe('test123');
  expect(await page.getByPlaceholder('Confirm password').inputValue()).toBe('test123');

  await page.getByRole('button', { name: /Next/i }).click();

  await page.getByPlaceholder('Enter your weight').fill('180');
  await (await page.$('#male')).check();
  await (await page.$('#goal')).selectOption({ label: 'Maintenance' });


  const createAccount = page.getByRole('button', { name: /CREATE ACCOUNT/i })
  await createAccount.click();

  await page.waitForURL('http://localhost:3000/')
  expect(page.url()).toBe('http://localhost:3000/'); //means user was created successfully and redirected
});