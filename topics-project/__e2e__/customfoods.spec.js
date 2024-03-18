const { test, expect } = require('@playwright/test');

test('submitting custom food form', async ({ page }) => {
  // Navigate to the custom foods page
  await page.goto('http://localhost:3000/customfoods');

  // Capture console messages
  const consoleMessages = [];
  page.on('console', msg => {
    consoleMessages.push(msg);
  });

  // Fill out the form fields with valid data
  await page.fill('#food_name', 'Test Food');
  await page.fill('#calories', '100');
  await page.fill('#protein', '5');
  await page.fill('#fat', '0');
  await page.fill('#carbs', '20');

  // Submit the form
  await page.click('button[type="submit"]');

  // Wait for the success message to appear in the console
  await page.waitForFunction(() => {
    return consoleMessages.some(msg => msg.text().includes('Form submitted successfully'));
  });

});
