import { Locator , Page , expect } from "@playwright/test";
import Playwrightwrappers from "../helper/wrapper/PlaywrightWrappers"
import { pageFixture } from './../hooks/pageFixture';


export default class AddToCartPage {
    private base: Playwrightwrappers;

    constructor(private page: Page){
        this.base = new Playwrightwrappers(page);
    }

    private Elements = {
        cartValue: "//span[@id='mat-badge-content-0']",
        addtoCartBtn: "(//span[@class='mdc-button__label'][normalize-space()='Add to Cart'])[1]",
        searchValue: "//div[@class='col mb-3']/div/div[1]/app-book-card/mat-card/mat-card-content/div/a/strong"
    }
    
    async clickAddToCart(){
        await this.base.waitAndClick(this.Elements.addtoCartBtn);
        const toast = pageFixture.page.locator("simple-snack-bar");
        await expect(toast).toBeVisible();
        await toast.waitFor({ state: 'hidden' });
    }
    
    async VerifyProductAddedInCart(){
        const cartValue = parseInt(await this.page.locator(this.Elements.cartValue).textContent() || '0',10);
        await expect(cartValue).toBeGreaterThan(0);
    }

    // async enterBookName(book : string){
    //     await this.page.locator(this.Elements.searchValue).fill(book);
    //     const option = await pageFixture.page.locator("mat-option[role='option'] span").first();
    //     if (await option.isVisible()){
    //         await option.waitFor({ state: 'visible' });
    //     await option.click();
    // }
    // }

    async verifyBookInCart(book: string) {
        const searchValue = await this.page.locator(this.Elements.searchValue).textContent();
        expect(searchValue).not.toContain(book);
    }
}