import { expect, test } from "../fixtures/fixture";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd(test);

Given("the user navigates to the home page", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");
});

When(
  "the user hovers over the {string} menu item",
  async ({ page }, menuItem) => {
    await page
      .getByRole("menuitem")
      .filter({ hasText: new RegExp(menuItem) })
      .hover();
  },
);

When(
  "the user clicks on the {string} menu item",
  async ({ page }, menuItem) => {
    await page
      .getByRole("menuitem")
      .filter({ hasText: new RegExp(menuItem) })
      .click();
  },
);

When(
  "the user clicks on the {string} product",
  async ({ page }, productName) => {
    await page.getByText(productName).click();
  },
);

When("the user searches for {string}", async ({ page }, searchKeyword) => {
  await page.locator("#search").click();
  await page.locator("#search").fill(searchKeyword);
  await page.getByRole('button', {name: "Search"}).click();
});

Then("the title of the page should be {string}", async ({ page }, title) => {
  await expect(page.locator(".page-title")).toHaveText(title);
});
