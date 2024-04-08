import test, { Locator, expect } from "@playwright/test";

let inputBox : Locator
let resultBox : Locator

test.beforeEach(async ({page}) => {
  await page.goto('/a01');
  inputBox = page.getByRole("textbox", {name : "Input"})
  resultBox = page.getByRole("textbox", {name : "Result"})
})
test('reversal of input', async ({ page }) => {
    await inputBox.fill("abc")
    
    await page.getByRole("button", {name : 'REVERSE!'}).click()
    await expect(resultBox).toHaveValue('cba');
  });
  