import { expect, test } from "../fixtures/fixture";
import { createBdd } from "playwright-bdd";
import { CommonComponent } from "../pages/commonComponent";

const { Given, When, Then } = createBdd(test);

// Given("the user navigates to the login page", async ({ page, loginPage, commonComponent }) => {
//     let mahasiswaAldy = new Mahasiswa("Aldy", "12345", "Sistem Informasi")
//     let mahasiswaAdi = new mahasiswa("Adi", "456", "Teknik Informatika")


//     // await commonComponent.clickMenutItem("Men");
//     // await loginPage.navigate();
//     // await page.waitForTimeout(10000)
// });


Given("the user navigates to the login page from navigation bar", async ({ page, commonComponent, loginPage }) => {
    // click sign in
    // 1. bikin commonComponent
    // 2. identifikasi atribut dari commonComponent
    // 3. identifikasi method yang ada di commonComponent
    // 4. masukkan commonComponent ke dalam fixture
    // 5. pakai commonComponent kedalam step
    await loginPage.navigateFromNavigationBar();
});
  