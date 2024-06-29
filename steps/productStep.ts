import { expect, test } from "../fixtures/fixture";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd(test);

When("the user adds the product {string} to the cart", async ({ page }, productName) => {
  await page.locator(`//strong[normalize-space(.)='${productName}']/parent::div`).hover();
  const responsePromise = page.waitForResponse("**/customer/section/load/?sections=cart**");
  await page.locator(`//strong[normalize-space(.)='${productName}']/parent::div`).getByRole("button", { name: "Add to Cart" }).click();
  await responsePromise;
});