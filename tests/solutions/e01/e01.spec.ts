import test, { expect } from "@playwright/test";
/*
Exercises for a01
1. Try with a different input
2. Check that button is disabled in the beginning
3. Check that button is enabled after filling the input
4. Check that after clearing the text box button is disabled
*/

test("another input", async ({ page }) => {
  await page.goto("/a01");
  const inputBox = page.getByRole("textbox", { name: "Input" });

  await inputBox.fill("def");
  await page.getByRole("button", { name: "REVERSE!" }).click();

  const resultBox = page.getByRole("textbox", { name: "Result" });

  await expect(resultBox).toHaveValue("fed");
});

test("button is disabled in the beginning", async ({ page }) => {
  await page.goto("/a01");
  const theButton = page.getByRole("button", { name: "REVERSE!" });

  await expect(theButton).toBeDisabled();
});
test("button is enabled after filling the input", async ({ page }) => {
  await page.goto("/a01");
  const theButton = page.getByRole("button", { name: "REVERSE!" });
  const inputBox = page.getByRole("textbox", { name: "Input" });

  await inputBox.fill("def");
  await expect(theButton).toBeEnabled();
});

test("button is disabled after clearing the input", async ({ page }) => {
  await page.goto("/a01");
  const theButton = page.getByRole("button", { name: "REVERSE!" });
  const inputBox = page.getByRole("textbox", { name: "Input" });

  await inputBox.fill("def");
  await inputBox.clear();
  await expect(theButton).toBeDisabled();
});
