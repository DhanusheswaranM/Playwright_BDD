import { Locator , Page } from "@playwright/test";
import Playwrightwrappers from "../helper/wrapper/PlaywrightWrappers"
import { pageFixture } from './../hooks/pageFixture';


export default class LoginPage {
    private base: Playwrightwrappers;

    constructor(private page: Page){
        this.base = new Playwrightwrappers(page);
    }

    private Elements = {
        userInput:"Username",
        passwordInput: "(//div[@class='mat-mdc-notch-piece mdc-notched-outline__notch'])[2]/label",
        errorMessage : "//mat-error[@id='mat-mdc-error-0']",
        loginButton : "(//button[@color='primary'])[3]",
        loginUser: "(//span[@class='mdc-button__label']//span)[1]"
    }
    
    async enterUsername(username : string){
        await this.page.getByPlaceholder(this.Elements.userInput).fill(username);;
    }

    async enterPassword(password : string){
        await this.page.locator(this.Elements.passwordInput).fill(password);
    }


    async ClickOnLoginButton(){
        await this.page.locator(this.Elements.loginButton).click();
    }
    async ErrorMessage(){
        await this.page.locator(this.Elements.errorMessage).isVisible();
    }

    async VerifyUser(){
        const user = await this.page.locator(this.Elements.loginUser);
        await user.isVisible();
        
    }
    async loginUser(username: string , password: string){
        await this.enterUsername(username);
        await this.enterPassword(password);
    }
}
