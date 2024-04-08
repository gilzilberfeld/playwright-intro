import test, { Locator, expect } from "@playwright/test";
// For a04
// Write the following test cases in 3 ways of finding the boxes
// 1. On startup all boxes are empty (using getByRoll().all())
// 2. When typing in the second box, the value appears in the other two (using getByPlaceHolder)
// 3. After clearing the boxes are empty (using XPath)

let button : Locator
let box1: Locator
let box2: Locator
let box3: Locator
test.beforeEach(async ({ page }) => {
    await page.goto("/a04");
    button = page.getByRole("button", { name: "Clear" });
})

test('On startup all boxes are empty', async ({page})=>{
    const boxes = await page.getByRole("textbox", {name : 'Clone Box'}).all()
    for (const box of boxes){
         await expect(box).toBeEmpty();
    }
})

test('When typing in the second box, the value appears in the other two', async ({page})=>{
    box1= page.getByPlaceholder("box1")
    box2= page.getByPlaceholder("box2")
    box3= page.getByPlaceholder("box3")

    await box2.fill('100a')
    await expect (box1).toHaveValue('100a')
    await expect (box3).toHaveValue('100a')
})

test('After clearing the boxes are empty', async ({page})=>{
    box1= page.locator('xpath=/html/body/main/section/div/div[1]/div[1]/div/input')
    box2= page.locator('xpath=/html/body/main/section/div/div[1]/div[2]/div/input')
    box3= page.locator('xpath=/html/body/main/section/div/div[1]/div[3]/div/input')
    
    await box2.fill('100a')
    await button.click()

    await expect (box1).toBeEmpty()
    await expect (box2).toBeEmpty()
    await expect (box3).toBeEmpty()
    
})