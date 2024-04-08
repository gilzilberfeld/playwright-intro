import test, { expect } from "@playwright/test";

test('error is displayed and hidden', async ({ page }) => {
    await page.goto('/a03');
  
    const inputBox = page.getByRole("textbox", { name : "Input"})
    const button =  page.getByRole("button", {name : 'Go to Reverse Page'})
    
    await inputBox.fill('navigate')
    await button.click()

    // after navigation
    await expect(page).toHaveURL(new RegExp('/.*a03\/reverse'))
    // OR
    await expect(page).toHaveURL('a03/reverse?input=navigate')

    const mainHeader = page.getByText('Welcome to the Reverse page!', {exact : true})
    const message = page.getByText('The reverse of')

    await expect(mainHeader).toBeVisible()
    await expect(message).toContainText('etagivan')
})
  