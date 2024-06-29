import test, { expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto("https://magento.softwaretestingboard.com/");
  });

  let testdata = [
    {productName: "Fusion Backpack"}, 
    {productName: "Affirm Water Bottle"}
  ]


for (const data of testdata) {
  test(`User are able to add ${data.productName} product to cart by clicking "Add to Cart" button in the product catalogue page`, async ({ page }) => {
    await page.locator("#search").click();
    await page.locator("#search").fill(data.productName);
    await page.getByRole('button', {name: "Search"}).click();
    await page.locator(`//strong[normalize-space(.)='${data.productName}']/parent::div`).hover();
    const responsePromise = page.waitForResponse("**/customer/section/load/?sections=cart**")
    await page.locator(`//strong[normalize-space(.)='${data.productName}']/parent::div`).getByRole("button", {name:"Add to Cart"}).click();
    await responsePromise;

    await page.getByRole("link", {name: "My Cart"}).click({delay: 1000});
    await expect(page.locator("#mini-cart")).toContainText(data.productName);
  })
}
