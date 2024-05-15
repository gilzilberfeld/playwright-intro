import test, { expect } from "@playwright/test";

test("finding the frame", async ({ page }) => {
  await page.goto("/a09");

  expect(page.mainFrame().childFrames().length).toBe(1);
  const theFrame = page.mainFrame().childFrames()[0];

  const theResultBox = theFrame.getByRole("textbox", { name: "Result" });
  await expect(theResultBox).toHaveValue('Waiting...');
});
