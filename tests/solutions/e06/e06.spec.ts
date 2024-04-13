import test, { Locator, expect } from "@playwright/test";

// For a07
// 	1. Write a test that checks that the URLs contain the right information
//  2. Write a test that goes to page 3, then goes back twice. 
//     Check that the URL and texts are displayed correctly and the input boxes are empty.

let firstPageButton: Locator;
let firstPageInput: Locator;
let secondPageButton: Locator;
let secondPageInput: Locator;
let secondPageText: Locator;

test("navigation through input is correct", async ({ page }) => {
  await page.goto("/a07");
  firstPageButton = page.getByRole("button", { name: "Go To" });
  firstPageInput = page.getByRole("textbox", { name: "Input" });

  await firstPageInput.fill("abc");
  await firstPageButton.click();
  await expect(page).toHaveURL("a07/page2?input=abc");

  secondPageButton = page.getByRole("button", { name: "Go To" });
  secondPageInput = page.getByRole("textbox", { name: "Input" });

  await secondPageInput.fill("def");
  await secondPageButton.click();
  await expect(page).toHaveURL("a07/page3?input=abcdef");
});

test("navigation back from 3rd page label is correct", async ({ page }) => {
  await page.goto("/a07");

  firstPageButton = page.getByRole("button", { name: "Go To" });
  firstPageInput = page.getByRole("textbox", { name: "Input" });

  await firstPageInput.fill("abc");
  await firstPageButton.click();

  await page.waitForURL("a07/page2?input=abc");

  secondPageButton = page.getByRole("button", { name: "Go To" });
  secondPageInput = page.getByRole("textbox", { name: "Input" });

  await secondPageInput.fill("def");
  await secondPageButton.click();

  await page.waitForURL("a07/page3?input=abcdef");

  await page.goBack();
  await expect(page).toHaveURL("a07/page2?input=abc");

  secondPageText = page.getByText("From Page 1");
  await expect(secondPageText).toContainText("abc");
  await expect(secondPageInput).toBeEmpty();

  await page.goBack();
  await expect(page).toHaveURL("a07");

  await expect(firstPageInput).toBeEmpty();
});
