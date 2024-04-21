import test, { expect } from "@playwright/test";

test('opening same page in same browser window', async ({ context }) => {
    const firstPage = await context.newPage()
    await firstPage.goto("/a01")
    
    const secondPage = await context.newPage()
    await secondPage.goto("/a01")
})
  

test('opening same page in different browser windows', async ({ browser }) => {
    const firstPage = await browser.newPage()
    await firstPage.goto("/a01")
    
    const secondPage = await browser.newPage()
    await secondPage.goto("/a01")
})
