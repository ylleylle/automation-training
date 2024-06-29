import { Locator, Page } from "@playwright/test";

export class CommonComponent {
    page: Page
    // signInButton: Locator
    // womenMenuItem: Locator
    // menMenuItem: Locator
    signInButton = () => this.page.getByRole('link', {name:"Sign In"})
    menuItemDynamictext = (dynamicMenu: string) => this.page.getByRole('menuitem').filter({hasText:new RegExp(dynamicMenu)})

    constructor(page: Page) {
        this.page = page;
        // this.signInButton = page.getByRole('link', { name:'Sign In' });
        // this.womenMenuItem = page.getByRole("menuitem").filter({ hasText: new RegExp("Women") })
        // this.menMenuItem = page.getByRole("menuitem").filter({ hasText: new RegExp("Men") })
    }

    async clickMenutItem(menuItem: string) {
        await this.menuItemDynamictext(menuItem).click()
    }

    async hoverMenutItem(menuItem: string) {
        await this.menuItemDynamictext(menuItem).hover()
    }
}