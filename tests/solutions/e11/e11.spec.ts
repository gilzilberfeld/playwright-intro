import { test, expect } from '@playwright/test';

// For guru99 demo: https://demo.guru99.com/test/newtours/index.php
// 1. With CodeGen create test that checks that the descriptions of the flights are visible
//      and contain the right values.
// 2. Write a test that calculates the total the $ sums and makes sure it's 1490
//      hint: use the RegEx /^\$\d+/

test.beforeEach(async ({page})=> {
    await page.goto('https://demo.guru99.com/test/newtours/index.php');
})

test('tours page has the right text', async ({ page }) => {
  await expect(page.getByText('Atlanta to Las Vegas')).toBeVisible();
  await expect(page.getByText('Boston to San Francisco')).toBeVisible();
  
  await expect(page.locator('body')).toContainText('New York to Chicago');
  await expect(page.locator('body')).toContainText('Phoenix to San Francisco');
  
});

test('cells contains exact total', async ({page})=> {
    const cells = page.getByRole('cell', {name : /^\$\d+/})
    const allCells = await cells.all()
    var total = 0
    
    for (const cell of allCells ) {
        const content = await cell.innerText();
        total += parseInt(content.slice(1))
    }
    expect(total).toBe(1490)
})