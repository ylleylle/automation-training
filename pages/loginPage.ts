import { Page } from "@playwright/test";
import { NavigationComponent } from './naivgationComponent';
import { CommonComponent } from "./commonComponent";

export class LoginPage {
    readonly page: Page
    private commonComponent: CommonComponent;

    constructor(page: Page) {
        this.page = page;
        this.commonComponent = new CommonComponent(this.page);
    }

    async navigate() {
        await this.page.goto('https://magento.softwaretestingboard.com/customer/account/login');
    }

    async navigateFromNavigationBar() {
        await this.commonComponent.signInButton().click();
    }
}