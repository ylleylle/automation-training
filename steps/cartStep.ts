import { expect, test } from "../fixtures/fixture";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd(test);


Given("the user clicks cart button", async ({ page }) => {
  await page.getByRole("link", { name: "My Cart" }).click({ delay: 1000 });
});

Then("the product {string} should be in the cart", async ({ page }, productName) => {
  await expect(page.locator("#mini-cart")).toContainText(productName);
});