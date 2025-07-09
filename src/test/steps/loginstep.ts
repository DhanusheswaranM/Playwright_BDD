import { Given, When, Then, setDefaultTimeout} from '@cucumber/cucumber';

import {chromium , Page , Browser , expect} from '@playwright/test';

import { pageFixture } from '../../hooks/pageFixture';
import LoginPage from './../../pages/loginPage';
import HeaderPage from './../../pages/headerPages';

let browser: Browser;
// let page: Page;

setDefaultTimeout(60 * 1000);
const headerPage = new HeaderPage(pageFixture.page!);
const loginPage = new LoginPage(pageFixture.page!);

Given('User navigates to the application',  { timeout: 30000 } , async function () {
    const baseUrl = process.env.BASEURL;
    if (!baseUrl) throw new Error("BASEURL env variable is not defined");
    await pageFixture.page!.goto(baseUrl);
    pageFixture.logger?.info("Navigated to the url");
         });
         
Given('User click on the login link', async function () {
    const headerPage = new HeaderPage(pageFixture.page!);
    await headerPage.clickOnLoginLink();
    pageFixture.logger?.info("Login link clicked");
         });

  
Given('User enter the username as {string}', async function (username) {
    const loginPage = new LoginPage(pageFixture.page!);
    await loginPage.enterUsername(username);
    console.log("Username : "+ username);
    pageFixture.logger?.info("username passed");
         });


Given('User enter the password as {string}', async function (password) {
    const loginPage = new LoginPage(pageFixture.page!);
    await loginPage.enterPassword(password);
    pageFixture.logger?.info("password passed");
         });


When('User click on the login button', async function () {
    const loginPage = new LoginPage(pageFixture.page!);
    await loginPage.ClickOnLoginButton();
    pageFixture.logger?.info("Login Button clicked");
         });


Then('Login should be success', async function () {
    const loginPage = new LoginPage(pageFixture.page!);
    await loginPage.VerifyUser();
    pageFixture.logger?.info("Login Success is verified");
         });

Then('Login should fail', async function () {
    const loginPage = new LoginPage(pageFixture.page!);
    await loginPage.ErrorMessage();
    pageFixture.logger?.info("Login gets failed as expected");
         });


