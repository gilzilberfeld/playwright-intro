import test, { Frame, Locator, expect } from "@playwright/test";

// for a10
// Make sure that in the frame appears the right image and not the other images

let googleButton: Locator;
let bingButton: Locator;
let wikiButton: Locator;
let theFrame: Frame
let googleImage: Locator
let bingImage: Locator
let wikiImage: Locator

test.beforeEach(async ({page})=> {
  await page.goto("/a10");
  googleButton = page.getByRole("button", { name: "Google" });
  bingButton = page.getByRole("button", { name: "Bing" });
  wikiButton = page.getByRole("button", { name: "Wikipedia" });
  theFrame = page.mainFrame().childFrames()[0]
  googleImage = theFrame.getByRole('img', {name : 'google'})
  bingImage = theFrame.getByRole('img', {name : 'Bing'})
  wikiImage = theFrame.locator('.central-featured-logo')
})

test('Google has Google image and no Bing / Wiki image', async ()=> {
  await googleButton.click()
  await expect(googleImage).toBeVisible()
  await expect(bingImage).toBeHidden()
  await expect(wikiImage).toBeHidden()
})

test('Bing has Bing image and no Google / Wiki image', async ()=> {
  await bingButton.click()
  await expect(bingImage).toBeVisible()
  await expect(googleImage).toBeHidden()
  await expect(wikiImage).toBeHidden()

})

test('Wiki has Wiki image and no Bing / Google image', async ()=> {
  await wikiButton.click()
  await expect(wikiImage).toBeVisible()
  await expect(googleImage).toBeHidden()
  await expect(bingImage).toBeHidden()

})