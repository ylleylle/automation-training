/** Generated from: features\productInteractions.feature */
import { test } from "../../fixtures/fixture.ts";

test.describe("Product Interactions", () => {

  test.describe("User adds a product to the cart from the product catalogue page", () => {

    test("Example #1", async ({ Given, page, And, When, Then }) => {
      await Given("the user navigates to the home page", null, { page });
      await And("the user searches for \"Fusion Backpack\"", null, { page });
      await When("the user adds the product \"Fusion Backpack\" to the cart", null, { page });
      await And("the user clicks cart button", null, { page });
      await Then("the product \"Fusion Backpack\" should be in the cart", null, { page });
    });

    test("Example #2", async ({ Given, page, And, When, Then }) => {
      await Given("the user navigates to the home page", null, { page });
      await And("the user searches for \"Affirm Water Bottle\"", null, { page });
      await When("the user adds the product \"Affirm Water Bottle\" to the cart", null, { page });
      await And("the user clicks cart button", null, { page });
      await Then("the product \"Affirm Water Bottle\" should be in the cart", null, { page });
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("features\\productInteractions.feature"),
});

const testMetaMap = {
  "User adds a product to the cart from the product catalogue page|Example #1": {"pickleLocation":"12:7"},
  "User adds a product to the cart from the product catalogue page|Example #2": {"pickleLocation":"13:7"},
};