import test, { Locator, expect } from "@playwright/test";
import exp from "constants";

// Buttons (clear / all ), check boxes,
// 	Buttons operate check boxes, and user can check
// test plan
/// Write tests that check things operate correctly.

let clearBothButton: Locator;
let selectBothButton: Locator;
let checkbox1: Locator;
let checkbox2: Locator;

test.beforeEach(async ({ page }) => {
  await page.goto("/a05");
  clearBothButton = page.getByRole("button", { name: "Clear both" });
  selectBothButton = page.getByRole("button", { name: "Select both" });
  checkbox1 = page.getByRole("checkbox", {name : 'Check 1'})
  checkbox2 = page.getByRole("checkbox", {name : 'Check 2'})
});

test("on startup both checkboxes are unchecked and clear is disabled", async ({page}) => {
    await expect(checkbox1).not.toBeChecked()
    await expect(checkbox2).not.toBeChecked()
    await expect(selectBothButton).toBeEnabled()
    await expect(clearBothButton).toBeDisabled()
});

test("selecting both when both unchecked checks both and disables select all button", async () => {
    await selectBothButton.click()

    await expect(checkbox1).toBeChecked()
    await expect(checkbox2).toBeChecked()
    await expect(selectBothButton).toBeDisabled()
    await expect(clearBothButton).toBeEnabled()

});
test("selecting both when one unchecked checks both and disables select all button", async () => {
    await checkbox1.check()
    await selectBothButton.click()

    await expect(checkbox1).toBeChecked()
    await expect(checkbox2).toBeChecked()
    await expect(selectBothButton).toBeDisabled()
    await expect(clearBothButton).toBeEnabled()
});

test("clearing both when one is unchecked clears and disables clear ", async () => {
    await checkbox2.check()
    await clearBothButton.click()

    await expect(checkbox1).not.toBeChecked()
    await expect(checkbox2).not.toBeChecked()
    await expect(selectBothButton).toBeEnabled()
    await expect(clearBothButton).toBeDisabled()
});
test("clearing all when both checked clears and disables clear ", async () => {
    await checkbox1.check()
    await checkbox2.check()
    await clearBothButton.click()
    
    await expect(checkbox1).not.toBeChecked()
    await expect(checkbox2).not.toBeChecked()
    await expect(selectBothButton).toBeEnabled()
    await expect(clearBothButton).toBeDisabled()
    
});

test("checking one enables both buttons", async () => {
    await checkbox1.check()
    
    await expect(selectBothButton).toBeEnabled()
    await expect(clearBothButton).toBeEnabled()

})

test("checking one and unchecking disables the clear button", async () => {
    await checkbox1.check()
    await checkbox1.uncheck()
    
    await expect(selectBothButton).toBeEnabled()
    await expect(clearBothButton).toBeDisabled()

})

test("selecting both and unchecking one enables both buttons", async () => {
    await selectBothButton.click()
    await checkbox2.uncheck()
    
    await expect(selectBothButton).toBeEnabled()
    await expect(clearBothButton).toBeEnabled()

})

test("checking both disables the select button", async () => {
    await checkbox1.check()
    await checkbox2.check()
    
    await expect(selectBothButton).toBeDisabled()
    await expect(clearBothButton).toBeEnabled()

})