// @ts-check

import { test, expect } from "@playwright/test";

test("page successfully fetches user", async ({ page }) => {
  await page.goto("http://localhost:3000/login");
  await page.getByPlaceholder("Enter email").click();
  await page.getByPlaceholder("Enter email").fill("kevingates@gmail.com");
  await page.getByPlaceholder("Enter email").press("Tab");
  await page.getByPlaceholder("Enter password").fill("password");
  await page.getByPlaceholder("Enter password").press("Enter");
  await page.getByText("Settings").click();

  // expect the following to be visible
  await expect(page.locator('input[name="height"]')).toBeVisible();
  await expect(page.locator('input[name="weight"]')).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Goal", exact: true })
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Save Changes" })
  ).toBeVisible();
  await expect(page.getByRole("button", { name: "Cancel" })).toBeVisible();
  await expect(page.getByPlaceholder("bobthebuilda")).toBeVisible();
});

test("page successfully updates user", async ({ page }) => {
  await page.goto("http://localhost:3000/login");
  await page.getByPlaceholder("Enter email").click();
  await page.getByPlaceholder("Enter email").fill("kevingates@gmail.com");
  await page.getByPlaceholder("Enter email").press("Tab");
  await page.getByPlaceholder("Enter password").fill("password");
  await page.getByPlaceholder("Enter password").press("Enter");
  await page.getByText("Settings").click();

  // go back to url
  await page.waitForURL("http://localhost:3000/settings/profile");

  // updates these values aka perform these actions

  const goalArray = [
    "Losing Weight",
    "Gaining Muscle",
    "Power Lifting",
    "Maintenance",
  ];
  const randomHeight = Math.floor(Math.random() * 80) + 10;
  const randomWeight = Math.floor(Math.random() * 600) + 30;
  const randomIndex = Math.floor(Math.random() * 3);

  const randomGoal = goalArray[randomIndex]; // unable to test goal
  // unable to test goal because i cat figure out how to get the value of the button after it changes

  // updating values
  await page.locator('input[name="weight"]').fill(randomWeight.toString());
  await page.locator('input[name="height"]').fill(randomHeight.toString());
  await page.getByRole("button", { name: "Losing Weight" }).click();
  await page.getByRole("menuitem", { name: "Losing Weight" }).click();
  // updating values

  // clicking save
  await page.getByRole("button", { name: "Save Changes" }).click();

  // checks
  expect(await page.locator('input[name="weight"]').inputValue()).toBe(
    randomWeight.toString()
  );
  expect(await page.locator('input[name="height"]').inputValue()).toBe(
    randomHeight.toString()
  );

  expect(
    await page.getByRole("button", { name: "Losing Weight" }).innerText()
  ).toBe("Losing Weight");
});

// in the futre , we should not hardcode the goal
