import test, { expect } from "@playwright/test";

test('reversal of input', async ({ page }) => {
    // Navigate to relative URL (from baseurl in config)
    await page.goto('/a01');
  
    // Find the input
    const inputBox = page.getByRole("textbox", {name : "Input"})
    
    // Fill the input
    await inputBox.fill("abc")
    
    // Click the button
    await page.getByRole("button", {name : 'REVERSE!'}).click()

    // Find the result
    const resultBox = page.getByRole("textbox", {name : "Result"})

    // Check the result contains the reverse string
    await expect(resultBox).toHaveValue('cba');
  });
  