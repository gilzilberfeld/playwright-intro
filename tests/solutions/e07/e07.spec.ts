import test, { Locator, Page, expect } from "@playwright/test";

// for a08
// Open the app on two pages in a browser 
// Write a test plan and implement for the chat functionality
let page1: Page;
let theLog1: Locator;
let sendButton1: Locator;
let resetButton1: Locator;
let refreshButton1: Locator;
let theInput1: Locator;

let page2: Page;
let theLog2: Locator;
let sendButton2: Locator;
let resetButton2: Locator;
let refreshButton2: Locator;
let theInput2: Locator;

test.beforeEach(async ({ context }) => {
  page1 = await context.newPage();
  page2 = await context.newPage();
  await page1.goto("/a08");
  await page2.goto("/a08");
  
  theLog1 = page1.getByRole("textbox", { name: "log" });
  theInput1 = page1.getByRole("textbox", { name: "Input" });
  sendButton1 = page1.getByRole("button", { name: "Send" });
  resetButton1 = page1.getByRole("button", { name: "Reset" });
  refreshButton1 = page1.getByRole("button", { name: "Refresh" });
  
  theLog2 = page2.getByRole("textbox", { name: "log" });
  theInput2 = page2.getByRole("textbox", { name: "Input" });
  sendButton2 = page2.getByRole("button", { name: "Send" });
  resetButton2 = page2.getByRole("button", { name: "Reset" });
  refreshButton2 = page2.getByRole("button", { name: "Refresh" });
  
 });

test("startup", async () => {
  
  await expect(sendButton1).toBeEnabled();
  await expect(resetButton1).toBeEnabled();
  await expect(refreshButton1).toBeEnabled();
  await expect(theLog1).toHaveValue("Log");
  await expect(theInput1).toBeEmpty();
  
  await expect(sendButton2).toBeEnabled();
  await expect(resetButton2).toBeEnabled();
  await expect(refreshButton2).toBeEnabled();
  await expect(theLog2).toHaveValue("Log");
  await expect(theInput2).toBeEmpty();
});

test("Refreshing shows an empty log", async () => {
  await refreshButton1.click();
  await expect(theLog1).toContainText("Start here->");
});


test('sending and refreshing on the same page', async()=>{
  await theInput1.fill('abc')
  await sendButton1.click()
  await refreshButton1.click();
  await expect(theLog1).toContainText("abc");
})

test('sending, resetting and refreshing clears the log on the same page', async()=>{
  await theInput1.fill('abc')
  await sendButton1.click()
  await resetButton1.click()
  await refreshButton1.click();
  await expect(theLog1).not.toContainText("abc");
})

test('sending on page 1, then refreshing on page 2', async()=>{
  await theInput1.fill('abc')
  await sendButton1.click()
  await refreshButton2.click();
  await expect(theLog2).toContainText("abc");
})

test('sending, resetting on page 1, then refreshing clears the log on page 2', async()=>{
  await theInput1.fill('abc')
  await sendButton1.click()
  await resetButton1.click()
  await refreshButton2.click();
  await expect(theLog2).not.toContainText("abc");
})

test('sending on page 1, sending on page 2, then refreshing on both', async()=>{
  await theInput1.fill('abc')
  await sendButton1.click()
  
  await theInput2.fill('def')
  await sendButton2.click()
  
  await refreshButton1.click();
  await expect(theLog1).toContainText("abc\ndef");

  await refreshButton2.click();
  await expect(theLog2).toContainText("abc\ndef");
})
