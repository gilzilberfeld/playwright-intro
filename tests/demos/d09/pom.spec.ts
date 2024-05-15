import test, { Locator, expect } from "@playwright/test";
import { App2Page } from "./a02.pom";

// for /a02

test.describe("validation suite for a02", () => {
  let thePage!: App2Page;

  test.beforeEach("A common setup", async ({ page }) => {
    thePage = new App2Page(page);
    await thePage.navigate();
  });

  test("correct error is displayed when both fields are empty", async () => {
    await thePage.validate();
    await thePage.shouldShowBothError();
    await thePage.shouldHideFirstNameError();
    await thePage.shouldHideLastNameError();
  });

  test("correct error is displayed when only first name is empty", async () => {
    await thePage.typeAnythingInLastName();
    await thePage.validate();
    await thePage.shouldShowFirstNameError();
    await thePage.shouldHideLastNameError();
    await thePage.shouldHideBothError();
  });

  test("correct error is displayed when only last name is empty", async () => {
    await thePage.typeAnythingInFirstName();
    await thePage.validate();
    await thePage.shouldHideFirstNameError();
    await thePage.shouldShowLastNameError();
    await thePage.shouldHideBothError();
  });

  test("no error is shown if both fields are filled", async () => {
    await thePage.typeAnythingInFirstName();
    await thePage.typeAnythingInLastName();
    await thePage.validate();
    await thePage.shouldHideFirstNameError();
    await thePage.shouldHideLastNameError();
    await thePage.shouldHideBothError();
  });

  test("typing anything clears both-empty-error", async () => {
    await thePage.validate();
    await thePage.typeAnythingInFirstName();
    await thePage.shouldHideBothError();
  });

  test("typing anything clears first-empty-error", async ({}) => {
    await thePage.typeAnythingInLastName();
    await thePage.validate();
    await thePage.typeAnythingInFirstName();
    await thePage.shouldHideLastNameError();
  });

  test("typing anything clears last-empty-error", async ({}) => {
    await thePage.typeAnythingInFirstName();
    await thePage.validate();
    await thePage.typeAnythingInLastName();
    await thePage.shouldHideFirstNameError();
  });

  test("typing anything on non-empty field clears empty-error", async ({}) => {
    await thePage.typeAnythingInFirstName();
    await thePage.validate();
    await thePage.typeAnythingInFirstName();
    await thePage.shouldHideFirstNameError();

    await thePage.clearBoth();

    await thePage.typeAnythingInLastName();
    await thePage.validate();
    await thePage.typeAnythingInLastName();
    await thePage.shouldHideLastNameError();
  });
});
