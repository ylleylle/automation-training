/** Generated from: features\navigation.feature */
import { test } from "../../fixtures/fixture.ts";

test.describe("User Navigation Journey", () => {

  test("Users are Able to Navigate to \"Men Jacket\" Section", async ({ Given, page, When, And, Then }) => {
    await Given("the user navigates to the home page", null, { page });
    await When("the user hovers over the \"Men\" menu item", null, { page });
    await And("the user hovers over the \"Tops\" menu item", null, { page });
    await And("the user clicks on the \"Jackets\" menu item", null, { page });
    await Then("the title of the page should be \"Jackets\"", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("features\\navigation.feature"),
});

const testMetaMap = {
  "Users are Able to Navigate to \"Men Jacket\" Section": {"pickleLocation":"4:1"},
};