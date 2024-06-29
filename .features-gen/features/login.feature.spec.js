/** Generated from: features\login.feature */
import { test } from "../../fixtures/fixture.ts";

test.describe("User Login", () => {

  test("User logs into the eCommerce site with valid credentials", async ({ Given, page, And, commonComponent, loginPage }) => {
    await Given("the user navigates to the home page", null, { page });
    await And("the user navigates to the login page from navigation bar", null, { page, commonComponent, loginPage });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("features\\login.feature"),
});

const testMetaMap = {
  "User logs into the eCommerce site with valid credentials": {"pickleLocation":"3:3"},
};