// @ts-check

import { test, expect } from "@playwright/test";

test("component renders correctly", async ({ page }) => {
  await page.goto("http://localhost:3000/login");
  await page.getByPlaceholder("Enter email").click();
  await page.getByPlaceholder("Enter email").fill("kevingates@gmail.com");
  await page.getByPlaceholder("Enter email").press("Tab");
  await page.getByPlaceholder("Enter password").fill("password");
  await page.getByPlaceholder("Enter password").press("Enter");
  await page.getByText("Add Food").click();

  // expect items

  await expect(
    page.locator("div").filter({ hasText: /^Add Custom Food$/ })
  ).toBeVisible();

  await expect(
    page.locator("div").filter({ hasText: /^Generate Meal$/ })
  ).toBeVisible();

  await expect(
    page.locator("div").filter({ hasText: /^Scan Barcode$/ })
  ).toBeVisible();

  await expect(page.getByPlaceholder("Search for any foods...")).toBeVisible();
  await expect(page.getByRole("heading", { name: "History" })).toBeVisible();
});

test("recieves food name from user and shows retults in [food_query] directory", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/login");
  await page.getByPlaceholder("Enter email").click();
  await page.getByPlaceholder("Enter email").fill("kevingates@gmail.com");
  await page.getByPlaceholder("Enter email").press("Tab");
  await page.getByPlaceholder("Enter password").fill("password");
  await page.getByPlaceholder("Enter password").press("Enter");
  await page
    .locator("div")
    .filter({ hasText: /^Add Food$/ })
    .click();
  await page.getByPlaceholder("Search for any foods...").click();
  await page.getByPlaceholder("Search for any foods...").click();
  await page.getByPlaceholder("Search for any foods...").fill("chicken breast");
  await page.getByPlaceholder("Search for any foods...").press("Enter");

  expect(page.getByPlaceholder("Search for any foods...")).toBeVisible(); // Check if input field with placeholder exists

  await expect(page.getByPlaceholder("Search for any foods...")).toHaveValue(
    "chicken breast"
  );
});

test("recieves and INCORRECT food from user and shows no foods found", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/login");
  await page.getByPlaceholder("Enter email").click();
  await page.getByPlaceholder("Enter email").fill("kevingates@gmail.com");
  await page.getByPlaceholder("Enter email").press("Tab");
  await page.getByPlaceholder("Enter password").fill("password");
  await page.getByPlaceholder("Enter password").press("Enter");
  await page
    .locator("div")
    .filter({ hasText: /^Add Food$/ })
    .click();
  await page.getByPlaceholder("Search for any foods...").click();
  await page.getByPlaceholder("Search for any foods...").click();
  await page.getByPlaceholder("Search for any foods...").fill("sfsdadasDFSF");
  await page.getByPlaceholder("Search for any foods...").press("Enter");

  // component should display "no foods found" to user

  await expect(page.getByPlaceholder("Search for any foods...")).toHaveValue(
    "sfsdadasDFSF"
  );

  await expect(page.locator(".md\\:w-\\[900px\\] > div").first()).toBeHidden(); // no items should be rendered
  // await expect(
  //   page.getByRole("heading", { name: "No Foods Found" })
  // ).toBeVisible();
});

// question: do i have to test if it renders food item correctly?
