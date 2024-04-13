import test, { Locator, expect } from "@playwright/test";

// for a07
// You can select items directly through the drop-down and through the text-box and the button
// The label shows the selected value
// 	1. Write a test plan
//  2. Write the tests that check the display based on selection

let firstPageTitle  : Locator
let firstPageButton: Locator;
let firstPageInput: Locator;
let secondPageTitle  : Locator
let secondPageButton: Locator;
let secondPageInput: Locator;
let secondPageText: Locator;
let thirdPageTitle  : Locator
let thirdPageText: Locator;


test("startup", async ({ page }) => {
  await page.goto("/a07");
  firstPageTitle = page.getByText("App 7")
  firstPageButton = page.getByRole("button", { name: "Go To" });
  firstPageInput = page.getByRole("textbox", { name: "Input" });

  await expect(firstPageButton).toBeVisible();
  await expect(firstPageInput).toBeEmpty()
  await expect(firstPageTitle).toContainText('Page 1')
});

test("filling the first page and navigating to the second", async ({ page }) => {
  await page.goto("/a07");
  firstPageTitle = page.getByText("App 7")
  firstPageButton = page.getByRole("button", { name: "Go To" });
  firstPageInput = page.getByRole("textbox", { name: "Input" });

  await firstPageInput.fill('abc')
  await firstPageButton.click();
  await expect(page).toHaveURL('a07/page2?input=abc')
  
  secondPageTitle = page.getByText("App 7")
  await expect(secondPageTitle).toContainText('Page 2')

  secondPageText = page.getByText("From Page 1")
  await expect(secondPageText).toContainText('abc')
});

test("filling the second page and navigating to the third", async ({ page }) => {
  await page.goto("/a07/page2?input=abc");
  secondPageTitle = page.getByText("App 7")
  secondPageButton = page.getByRole("button", { name: "Go To" });
  secondPageInput = page.getByRole("textbox", { name: "Input" });

  await secondPageInput.fill('def')
  await secondPageButton.click();
  await expect(page).toHaveURL('a07/page3?input=abcdef')
  
  thirdPageTitle = page.getByText("App 7")
  await expect(thirdPageTitle).toContainText('Page 3')

  thirdPageText = page.getByText("From Page 2")
  await expect(thirdPageText).toContainText('abcdef')
});
