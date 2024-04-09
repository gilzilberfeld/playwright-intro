import test, { Locator, expect } from "@playwright/test";

// for a06
// You can select items directly through the drop-down and through the text-box and the button
// The label shows the selected value
// 	1. Write a test plan
//  2. Write the tests that check the display based on selection

let theButton: Locator;
let theDropDown: Locator;
let theTextBox: Locator;
let theLabel: Locator;

test.beforeEach(async ({ page }) => {
  await page.goto("/a06");
  theButton = page.getByRole("button", { name: "Select" });
  theDropDown = page.getByRole("combobox");
  theTextBox = page.getByRole("textbox", { name: "Select Item" });
  theLabel = page.getByText("Selected:");
});

test("startup", async ({ page }) => {
  await expect(theButton).toBeDisabled();
  await expect(theDropDown).toHaveText("Item 1");
  await expect(theTextBox).toBeEmpty();
  await expect(theLabel).toHaveText("Selected: Item 1");
});


test("select through drop-down", async({page}) =>{
    await theDropDown.click()
    await page.getByRole('option', {name : 'Item 3'}).click()
    await expect(theLabel).toHaveText("Selected: Item 3");
});

test('entering a value enables the button', async ()=>{
  await theTextBox.fill('1')
  await expect(theButton).toBeEnabled();
})

test('clearing the textbox disables the button', async ()=>{
  await theTextBox.fill('1')
  await theTextBox.clear()

  await expect(theButton).toBeDisabled();
})

test("select through input", async({page}) =>{
  await theTextBox.fill('3')
  await theButton.click()
  await expect(theLabel).toHaveText("Selected: Item 3");
});

test("no item found", async()=> {
  await theTextBox.fill('z')
  await theButton.click()
  await expect(theLabel).toHaveText("Selected: Item Not Found");
})
