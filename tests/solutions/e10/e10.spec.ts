import { test, expect, Locator } from "@playwright/test";

// For      a12
// APIs :   a12/storage
// 1. Write a test that proves the operation succeeded

test("adding name works correctly", async ({ page , request}) => {
  await page.goto("/a12");
  let theButton: Locator;
  let theName: Locator;
  let theMessage: Locator;

  theButton = page.getByRole("button", { name: "Store" });
  theName = page.getByRole("textbox", { name: "Name" });
  
  await theName.fill("abc");
  await theButton.click();
  
  // The URL contains the name as parameter
  await page.waitForURL(new RegExp('a12/thankyou'))  
  expect(page.url()).toContain('abc')
  
  // The message contains the name
  theMessage = page.getByText("Thank you" ).first();
  await expect(theMessage).toContainText('abc')

  // The API returned 200
  const getNameAPI = await request.get(`/a12/storage`);
  expect(getNameAPI.ok()).toBeTruthy();

  // The returned value is correct
  const theValue = await getNameAPI.json()
   expect(theValue.theName).toBe('abc') 

});
