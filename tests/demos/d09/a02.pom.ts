import { Locator, Page, expect } from "@playwright/test";

const ANY_CHARACTER = 'a';
export class App2Page {
  button!: Locator;
  bothErrorText!: Locator;
  firstNameErrorText!: Locator;
  lastNameErrorText!: Locator;
  firstNameBox!: Locator;
  lastNameBox!: Locator;
  page: Page;

  constructor(page: Page) {
    this.page = page;
    this.bothErrorText = page.getByText("Both values are missing");
    this.firstNameErrorText = page.getByText("First name is missing");
    this.lastNameErrorText = page.getByText("Last name is missing");
    this.button = page.getByRole("button", { name: "CHECK" });
    this.firstNameBox = page.getByRole("textbox", { name: "First name" });
    this.lastNameBox = page.getByRole("textbox", { name: "Last name" });
  }

  async navigate() {
    await this.page.goto("/a02");
  }

  async validate() {
    await this.button.click();
  }

  async shouldShowFirstNameError() {
    await expect(this.firstNameErrorText).toBeVisible();
  }

  async shouldHideFirstNameError() {
    await expect(this.firstNameErrorText).toBeHidden();
  }

  async shouldShowLastNameError() {
    await expect(this.lastNameErrorText).toBeVisible();
  }

  async shouldHideLastNameError() {
    await expect(this.lastNameErrorText).toBeHidden();
  }

  async shouldShowBothError() {
    await expect(this.bothErrorText).toBeVisible();
  }

  async shouldHideBothError() {
    await expect(this.bothErrorText).toBeHidden();
  }

  async typeAnythingInLastName(){
    await this.lastNameBox.fill(ANY_CHARACTER)
  }

  async typeAnythingInFirstName(){
    await this.firstNameBox.fill(ANY_CHARACTER)
  }

  async clearBoth(){
    await this.firstNameBox.clear();
    await this.lastNameBox.clear();
  
  }
}
