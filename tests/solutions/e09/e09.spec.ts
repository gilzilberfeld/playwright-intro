import test, { Frame, Locator } from "@playwright/test";
import { unlink } from "node:fs";

// for a10
// write three test that create a screenshot including each frame content
// clean up the files afterwards

let googleButton: Locator;
let testingilButton: Locator;
let wikiButton: Locator;
let theFrame: Frame;

test.beforeEach(async ({ page }) => {
  await page.goto("/a10");
  googleButton = page.getByRole("button", { name: "Google" });
  testingilButton = page.getByRole("button", { name: "TestinGil" });
  wikiButton = page.getByRole("button", { name: "Wikipedia" });
  theFrame = page.mainFrame().childFrames()[0];
});

test("Grab screenshots of Google frame", async ({ page }) => {
  await googleButton.click();
  await theFrame.waitForURL(new RegExp("google"));
  await page.screenshot({ path: "Google.jpg" });
});

test("Grab screenshots of TestinGil frame", async ({ page }) => {
  await testingilButton.click();
  await theFrame.waitForURL(new RegExp("everydayunittesting"));
  await page.screenshot({ path: "TestinGil.jpg" });
});

test("Grab screenshots of Wikipedia frame", async ({ page }) => {
  await wikiButton.click();
  await theFrame.waitForURL(new RegExp("wikipedia"));
  await page.screenshot({ path: "Wikipedia.jpg" });
});

test.afterEach(() => {
  unlink("Wikipedia.jpg", () => {});
  unlink("TestinGil.jpg", () => {});
  unlink("Google.jpg", () => {});
});
