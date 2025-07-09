import { expect , Page , Locator } from "@playwright/test";
import Playwrightwrappers from "../helper/wrapper/PlaywrightWrappers";

export default class HeaderPage{
    private base : Playwrightwrappers;
    clickOnLoginButton: any;
    constructor(private page : Page ){
        this.base = new Playwrightwrappers(page);
    }

    private headerPageElements = {
        loginLinkButton: "(//span[@class='mdc-button__label'])[2]",
        searchInput: "//input[@type='search']",
        cartBtn: "(//span[@class='mdc-button__label'][normalize-space()='Add to Cart'])[1]",
        cartValue: "//span[@id='mat-badge-content-0']",
        userMenu: "//button[contains(@class,'mat-focus-indicator mat-menu-trigger')]",
        myOrder: "//button[text()='My Orders' and @role='menuitem']",
        logoutLink:  "//button[text()='Logout' and @role='menuitem')]"
    }



    async clickOnLoginLink(){
        await this.base.waitAndClick(this.headerPageElements.loginLinkButton);
    }

    async clickOnCartButton(){
        await this.base.waitAndClick(this.headerPageElements.cartBtn);
    }   

    async clickOnUserMenu(){
        await this.base.waitAndClick(this.headerPageElements.userMenu);
    }

    async enterBookName(bookName: string){
        await this.page.locator(this.headerPageElements.searchInput).fill(bookName);
        const option = await this.page.locator("mat-option[role='option'] span").first();
            if (await option.isVisible()){
                await option.waitFor({ state: 'visible' });
            await option.click();
        }
    }

    async logoutUser(){
        await this.clickOnUserMenu();
        await this.base.navigateTo(this.headerPageElements.logoutLink);

    }
}