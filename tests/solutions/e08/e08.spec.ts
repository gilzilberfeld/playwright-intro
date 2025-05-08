import test, { Frame, Locator, expect } from "@playwright/test";

// for a10
// Make sure that in the frame appears the right image and not the other images

let googleButton: Locator;
let testingilButton: Locator;
let wikiButton: Locator;
let theFrame: Frame
let googleImage: Locator
let testingilImage: Locator
let wikiImage: Locator

test.beforeEach(async ({page})=> {
  await page.goto("/a10");
  googleButton = page.getByRole("button", { name: "Google" });
  testingilButton = page.getByRole("button", { name: "TestinGil" });
  wikiButton = page.getByRole("button", { name: "Wikipedia" });
  theFrame = page.mainFrame().childFrames()[0]
  googleImage = theFrame.locator('.lnXdpd')
  testingilImage = theFrame.getByRole('link', { name: 'TestinGil'});
  wikiImage = theFrame.locator('.central-featured-logo');
})

test('Google has Google image and no TestinGil / Wiki image', async ()=> {
  await googleButton.click()
  await expect(googleImage).toBeVisible()
  await expect(testingilImage).toBeHidden()
  await expect(wikiImage).toBeHidden()
})

test('TestinGil has TestinGil image and no Google / Wiki image', async ()=> {
  await testingilButton.click()
  await expect(testingilImage).toBeVisible()
  await expect(googleImage).toBeHidden()
  await expect(wikiImage).toBeHidden()

})

test('Wiki has Wiki image and no TestinGil / Google image', async ()=> {
  await wikiButton.click()
  await expect(wikiImage).toBeVisible()
  await expect(googleImage).toBeHidden()
  await expect(testingilImage).toBeHidden()

})