import { setDefaultTimeout, Then, When } from "@cucumber/cucumber";
import { Browser, expect } from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";
import HeaderPage from "../../pages/headerPages";
import LoginPage from "../../pages/loginPage";
import { DataProvider , RegisterUser} from "../../helper/util/dataprovider";
import RegistrationPage from "../../pages/registrationPage";
import { assert } from "console";

let browser: Browser;

setDefaultTimeout(60 * 1000);

When('the User clicks the Register Link Button', async function () {
    pageFixture.logger?.info("Login link clicked");
    const headerPage = new HeaderPage(pageFixture?.page);
    await headerPage.clickOnLoginLink();
    await headerPage.clickRegisterLinkBtn();
         });


When('the User provides the details for the registration', async function () {
    const registerPage = new RegistrationPage(pageFixture?.page);
    const users: RegisterUser[] = DataProvider.getRegisterUsersFromCSV();

    for (const user of users) {
        const uniqueUsername = `${user.userName}_${Date.now()}`;
        console.log(` Registering user: ${uniqueUsername}`);

        await registerPage.registerUser(
            user.firstName,
            user.lastName,
            uniqueUsername,
            user.password,
            user.confirmPassword,
            user.gender ?? "m"
        );
        const headerPage = new HeaderPage(pageFixture?.page);
    await headerPage.clickRegisterLinkBtn();
    }
});
        

         
Then('the User is directed into the Login Page', async function () {
    const registrationPage = new RegistrationPage(pageFixture?.page);
    registrationPage.verifyAfterLogin();
    pageFixture.logger?.info("Login Success is verified");
         });