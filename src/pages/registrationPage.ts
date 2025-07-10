import { expect , Page , Locator } from "@playwright/test";
import Playwrightwrappers from "../helper/wrapper/PlaywrightWrappers";
import { pageFixture } from "../hooks/pageFixture";

export default class RegistrationPage{
    private base : Playwrightwrappers;
    clickOnLoginButton: any;
    constructor(private page : Page ){
        this.base = new Playwrightwrappers(page);
    }

    private RegistrationPageElements = {
        firstNameField:"First name",
        lastNameField:"Last Name",
        usernameField:"User name",
        passwordField: "[formcontrolname='password']",
        confirmPasswordField: "[formcontrolname='confirmPassword']",
        maleBtn : "//input[@class='mdc-radio__native-control' and @value='Male']",
        femaleBtn : "//input[@class='mdc-radio__native-control' and @value='Female']",
        registerBtn : "(//span[contains(text(),'Register')])[2]"
    }

    async registerUser(firstName: string, lastName: string, username: string, password: string, confirmPassword: string, gender: string) {
    await this.Fname(firstName);
    await this.Lname(lastName);
    await this.username(username);
    await this.password(password);
    await this.confirmpassword(confirmPassword);

    if (gender.toLowerCase() === 'm') {
        await this.clickMale();
    } else if (gender.toLowerCase() === 'f') {
        await this.clickFemale();
    }
    await this.page.waitForTimeout(5000);
    
    await this.clickRegisterBtn();

    await this.page.waitForTimeout(5000);
}



    async Fname(fName : string){
        await this.page.getByPlaceholder(this.RegistrationPageElements.firstNameField).fill(fName);
        pageFixture.logger?.info("First Name entered");
    }

    async Lname(lName : string){
        await this.page.getByPlaceholder(this.RegistrationPageElements.lastNameField).fill(lName);
        pageFixture.logger?.info("Last Name entered");
    }

    async username(userName : string){
        await this.page.getByPlaceholder(this.RegistrationPageElements.usernameField).fill(userName);
        pageFixture.logger?.info("User Name entered");
    }

    async password(passWord : string){
        await this.page.locator(this.RegistrationPageElements.passwordField).fill(passWord);
        pageFixture.logger?.info("Password entered");
    }

    async confirmpassword(confirmPassword : string){
        await this.page.locator(this.RegistrationPageElements.confirmPasswordField).fill(confirmPassword);
        pageFixture.logger?.info("Confirm Password entered");
    }

    async clickMale(){
        await this.base.waitAndClick(this.RegistrationPageElements.maleBtn);
        pageFixture.logger?.info("Male Button clicked");
    }

    async clickFemale(){
        await this.base.waitAndClick(this.RegistrationPageElements.femaleBtn);
        pageFixture.logger?.info("Female Button clicked");
    }

    async clickRegisterBtn(){
        await this.base.waitAndClick(this.RegistrationPageElements.registerBtn);
        pageFixture.logger?.info("Register Button clicked");
    }

    async verifyAfterLogin(){
        await expect(this.page.url()).toBe('https://bookcart.azurewebsites.net/register');
    }
}