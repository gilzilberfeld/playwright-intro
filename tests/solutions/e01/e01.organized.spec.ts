import test, { Locator, expect } from "@playwright/test";

let inputBox : Locator
let button : Locator
let resultBox: Locator

test.beforeEach(async ({page}) => {
  await page.goto("/a01");
  inputBox = page.getByRole("textbox", { name: "Input" });
  button = page.getByRole("button", { name: "REVERSE!" });
  resultBox = page.getByRole("textbox", { name: "Result" });
  
})

test("another input", async () => {
  await inputBox.fill("def");
  await button.click();
  await expect(resultBox).toHaveValue("fed");
});

test("button is disabled in the beginning", async ({ }) => {
  await expect(button).toBeDisabled();
});

test("button is enabled after filling the input", async () => {
  await inputBox.fill("def");
  await expect(button).toBeEnabled();
});

test("button is disabled after clearing the input", async () => {
	await inputBox.fill("def");
	await inputBox.clear()
	await expect(button).toBeDisabled();
});
  