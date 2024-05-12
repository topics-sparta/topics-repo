const { test, expect } = require("@playwright/test");

test("submitting custom food form", async ({ page }) => {
  // Navigate to the custom foods page
  await page.goto("http://localhost:3000/customfoods");

  // Capture console messages
  const consoleMessages = [];
  page.on("console", (msg) => {
    consoleMessages.push(msg); // Push the text content of the message
  });

  // Fill out the form fields with valid data
  await page.fill("#food_name", "Olu Test Food");
  await page.fill("#calories", "999");
  await page.fill("#protein", "555");
  await page.fill("#fat", "0");
  await page.fill("#carbs", "333");

  // Submit the form
  await page.click('button[type="submit"]');

  await page.waitForSelector(".success-alert");
  // Get the text content of the success alert
  const alertText = await page.evaluate(() => {
    const alertElement = document.querySelector(".success-alert");
    return alertElement ? alertElement.innerText : null;
  });

  expect(alertText).toContain("Form submitted successfully");
});
