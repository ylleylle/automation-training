import { test as base } from 'playwright-bdd';
import { NavigationComponent } from '../pages/naivgationComponent';
import { LoginPage } from '../pages/loginPage';
import { CommonComponent } from '../pages/commonComponent';

// Declare the types of your fixtures.
type MyFixtures = {
  commonComponent: CommonComponent,
  loginPage: LoginPage,
  // kelasBaru: KelasBaru
};

// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
  commonComponent: async ({ page }, use) => {
    await use(new CommonComponent(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  // kelasBaru: async ({ page }, use) => {
  //   await use(new KelasBaru(page));
  // },
});

export { expect } from '@playwright/test';