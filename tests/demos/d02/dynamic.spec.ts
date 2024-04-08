import test, { expect } from "@playwright/test";

test('error is displayed and hidden', async ({ page }) => {
    await page.goto('/a02');
  
    await page.getByRole("button", {name : 'CHECK'}).click()
    const errorText = page.getByText("Both values are missing")
    
    await expect(errorText).toBeVisible()
    
    await page.getByRole("textbox", {name : 'First name'}).fill('a')
    
    await expect(errorText).toBeHidden()
    // OR
    await expect(errorText).not.toBeVisible()
})
  