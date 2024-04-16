import test, { Locator, expect } from "@playwright/test";

// for a08

let theLog  : Locator
let sendButton: Locator;
let resetButton: Locator;
let refreshButton: Locator;
let theInput: Locator;


test.beforeEach(async ({page})=> {
  await page.goto("/a08");
  theLog = page.getByRole("textbox", { name: "Log" });
  theInput = page.getByRole("textbox", { name: "Input" });
  sendButton = page.getByRole("button", { name: "Send" });
  resetButton = page.getByRole("button", { name: "Reset" });
  refreshButton = page.getByRole("button", { name: "Refresh" });
})

test("startup", async ({ page }) => {
  await expect(sendButton).toBeEnabled();
  await expect(resetButton).toBeEnabled();
  await expect(refreshButton).toBeEnabled()
  await expect(theLog).toBeEmpty()
  await expect(theInput).toBeEmpty()
});

test("startup with something in the log", async ({ page }) => {
})

test("add to log", async ({ page }) => {
  await theInput.fill("something")
  await sendButton.click()

  await expect(theLog).toHaveText("something")
})

/*
test("filling the first page and navigating to the second", async ({ page }) => {
  await page.goto("/a07");
  log = page.getByText("App 7")
  sendButton = page.getByRole("button", { name: "Go To" });
  resetButton = page.getByRole("textbox", { name: "Input" });

  await resetButton.fill('abc')
  await sendButton.click();
  await expect(page).toHaveURL('a07/page2?input=abc')
  
  secondPageTitle = page.getByText("App 7")
  await expect(secondPageTitle).toContainText('Page 2')

  secondPageText = page.getByText("From Page 1")
  await expect(secondPageText).toContainText('abc')
});

test("filling the second page and navigating to the third", async ({ page }) => {
  await page.goto("/a07/page2?input=abc");
  secondPageTitle = page.getByText("App 7")
  refreshButton = page.getByRole("button", { name: "Go To" });
  theInput = page.getByRole("textbox", { name: "Input" });

  await theInput.fill('def')
  await refreshButton.click();
  await expect(page).toHaveURL('a07/page3?input=abcdef')
  
  thirdPageTitle = page.getByText("App 7")
  await expect(thirdPageTitle).toContainText('Page 3')

  thirdPageText = page.getByText("From Page 2")
  await expect(thirdPageText).toContainText('abcdef')
});
*/