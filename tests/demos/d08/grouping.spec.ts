import test, { Locator, expect } from "@playwright/test";

// for /a02

test.describe("A suite of tests", () => {
  let button: Locator;
  let bothErrorText: Locator;
  let firstNameErrorText: Locator;
  let lastNameErrorText: Locator;
  let firstNameBox: Locator;
  let lastNameBox: Locator;

  test.beforeEach('A common setup', async ({ page }) => {
    await page.goto("/a02");

    // the locators are declared, but not calculated
    bothErrorText = page.getByText("Both values are missing");
    firstNameErrorText = page.getByText("First name is missing");
    lastNameErrorText = page.getByText("Last name is missing");
    button = page.getByRole("button", { name: "CHECK" });
    firstNameBox = page.getByRole("textbox", { name: "First name" });
    lastNameBox = page.getByRole("textbox", { name: "Last name" });
  });

  test("correct error is displayed when both fields are empty", async () => {
    await button.click();
    await expect(bothErrorText).toBeVisible();
    await expect(firstNameErrorText).toBeHidden();
    await expect(lastNameErrorText).toBeHidden();
  });

  test("correct error is displayed when only first name is empty", async () => {
    await lastNameBox.fill("a");
    await button.click();
    await expect(firstNameErrorText).toBeVisible();
    await expect(bothErrorText).toBeHidden();
    await expect(lastNameErrorText).toBeHidden();
  });

  test("correct error is displayed when only last name is empty", async () => {
    await firstNameBox.fill("a");
    await button.click();
    await expect(lastNameErrorText).toBeVisible();
    await expect(bothErrorText).toBeHidden();
    await expect(firstNameErrorText).toBeHidden();
  });

  test("no error is shown if both fields are filled", async () => {
    await firstNameBox.fill("a");
    await lastNameBox.fill("a");
    await button.click();
    await expect(lastNameErrorText).toBeHidden();
    await expect(firstNameErrorText).toBeHidden();
    await expect(bothErrorText).toBeHidden();
  });

  test("typing anything clears both-empty-error", async () => {
    await button.click();
    await firstNameBox.fill("a");
    await expect(bothErrorText).toBeHidden();
  });

  test("typing anything clears first-empty-error", async ({ }) => {
    await lastNameBox.fill("a");
    await button.click();
    await firstNameBox.fill("a");
    await expect(lastNameErrorText).toBeHidden();
  });

  test("typing anything clears last-empty-error", async ({ }) => {
    await firstNameBox.fill("a");
    await button.click();
    await lastNameBox.fill("a");
    await expect(firstNameErrorText).toBeHidden();
  });

  test("typing anything on non-empty field clears empty-error", async ({ }) => {
    await firstNameBox.fill("a");
    await button.click();
    await firstNameBox.fill("b");
    await expect(firstNameErrorText).toBeHidden();

    await firstNameBox.clear();
    await lastNameBox.clear();

    await lastNameBox.fill("a");
    await button.click();
    await lastNameBox.fill("b");
    await expect(lastNameErrorText).toBeHidden();
  });
});
