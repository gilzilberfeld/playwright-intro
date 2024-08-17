import test, { expect } from "@playwright/test";

test('browser navigation', async ({ page }) => {
    await page.goto('/a03');
  
    const inputBox = page.getByRole("textbox", { name : "Input"})
    const button =  page.getByRole("button", {name : 'Go to Reverse Page'})
    const message = page.getByText('The reverse of')
    
    await inputBox.fill('navigate')
    await button.click()

    await expect(page).toHaveURL('a03/reverse?input=navigate')
    
    await page.goBack()
    await expect(page).toHaveURL('/a03')

    await expect(inputBox).toBeEmpty()

    await page.goForward()

   
    await expect(message).toContainText('etagivan')

    
})
  