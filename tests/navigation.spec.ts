import { test, expect } from "@playwright/test";

test.describe("User are able to navigate using navigation bar", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/");
  });

  test.afterAll(async ({}) => {
    console.log("Selesai euyy");
  });

  test("User are Able to Navigate to Mens Top Jackets Product Catalogue", async ({
    page,
  }) => {
    await page.getByRole("menuitem", { name: " Men" }).hover();
    await page.getByRole("menuitem", { name: " Tops" }).hover();
    await page.getByRole("menuitem", { name: "Jackets" }).click();
    await expect(page.getByLabel("Items").locator("span")).toContainText(
      "Jackets"
    );
  });

  test("User are Able to Navigate to Bags Gear Product Catalogue", async ({
    page,
  }) => {
    await page
      .locator("//a[.='Gear']/span[contains(@class, 'ui-menu-icon')]")
      .hover();
    await page.locator("//a[.='Bags']").click();
    await expect(page.locator("//span[@class='base']")).toHaveText("Bags");
  });
});
