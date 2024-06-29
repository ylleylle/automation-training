import { Page } from "@playwright/test";

export class NavigationComponent {
    readonly page: Page

    signInButton = () => this.page.getByRole('link', { name: 'Sign In' })

    constructor(page: Page){
        this.page = page;
    }
}