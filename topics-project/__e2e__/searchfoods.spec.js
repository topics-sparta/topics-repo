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
  await page.getByText("Add Food").click();
  await page.getByPlaceholder("Search for any foods...").click();
  await page.getByPlaceholder("Search for any foods...").fill("nutella");
  await page.getByPlaceholder("Search for any foods...").press("Enter");

  await expect(
    page.getByRole("heading", { name: "Results for : nutella" }) // headng should be there
  ).toBeVisible();

  // something from the api should be returned and displayed
  await expect(
    page.getByRole("heading", {
      name: "Item Description: Nutella sandwich on wheat bread",
    })
  ).toBeVisible();
});

test("recieves and INCORRECT food from user and shows retults in [food_query] directory", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/login");
  await page.getByPlaceholder("Enter email").click();
  await page.getByPlaceholder("Enter email").fill("kevingates@gmail.com");
  await page.getByPlaceholder("Enter email").press("Tab");
  await page.getByPlaceholder("Enter password").fill("password");
  await page.getByPlaceholder("Enter password").press("Enter");
  await page.getByText("Add Food").click();
  await page.getByPlaceholder("Search for any foods...").click();
  await page
    .getByPlaceholder("Search for any foods...")
    .fill("asdfgadfdgf347654345");
  await page.getByPlaceholder("Search for any foods...").press("Enter");

  // component should display "no foods found" to user
  await expect(
    page.getByRole("heading", { name: "No Foods Found" })
  ).toBeVisible();
});

// question: do i have to test if it renders food item correctly?
