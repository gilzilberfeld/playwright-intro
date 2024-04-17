import test, { Frame, Locator } from "@playwright/test";
import { unlink } from "node:fs";

// for a10
// write three test that create a screenshot including each frame content
// clean up the files afterwards

let googleButton: Locator;
let bingButton: Locator;
let wikiButton: Locator;
let theFrame: Frame;

test.beforeEach(async ({ page }) => {
  await page.goto("/a10");
  googleButton = page.getByRole("button", { name: "Google" });
  bingButton = page.getByRole("button", { name: "Bing" });
  wikiButton = page.getByRole("button", { name: "Wikipedia" });
  theFrame = page.mainFrame().childFrames()[0];
});

test("Grab screenshots of Google frame", async ({ page }) => {
  await googleButton.click();
  await theFrame.waitForURL(new RegExp("google"));
  await page.screenshot({ path: "Google.jpg" });
});

test("Grab screenshots of Bing frame", async ({ page }) => {
  await bingButton.click();
  await theFrame.waitForURL(new RegExp("bing"));
  await page.screenshot({ path: "Bing.jpg" });
});

test("Grab screenshots of Wikipedia frame", async ({ page }) => {
  await wikiButton.click();
  await theFrame.waitForURL(new RegExp("wikipedia"));
  await page.screenshot({ path: "Wikipedia.jpg" });
});

test.afterEach(() => {
  unlink("Wikipedia.jpg", () => {});
  unlink("Bing.jpg", () => {});
  unlink("Google.jpg", () => {});
});
