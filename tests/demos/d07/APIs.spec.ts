import test, { Locator, expect } from "@playwright/test";

let theButton: Locator;
let theLabel: Locator;
test.beforeEach(async ({ page }) => {
  theButton = page.getByRole("button", { name: "Increment" });
  theLabel = page.getByText("Counter: ");
});

test("starting from scratch", async ({ page, request }) => {
  let resetAPI = await request.post(`/a11/counter`, {
    data: { newCounter: "0" },
  });

  expect(resetAPI.ok()).toBeTruthy();

  await page.goto("/a11");
  await expect(theLabel).toContainText("0");
  await theButton.click();
  await expect(theLabel).toContainText("1");
});

test.skip("resetting the counter", async ({ request, page }) => {
  const
   resetAPI = await request.post(`/a11/counter`, {
    data: { newCounter: "5" },
  });

  expect(resetAPI.ok()).toBeTruthy();

  await page.goto("/a11");
  await expect(theLabel).toContainText("5");
  await theButton.click();
  await expect(theLabel).toContainText("6");
});
