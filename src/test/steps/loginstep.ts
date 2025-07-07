import { Given, When, Then} from '@cucumber/cucumber';

import {chromium , Page , Browser , expect} from '@playwright/test';

import { pageFixture } from '../../hooks/pageFixture';

let browser: Browser;
// let page: Page;


Given('User navigates to the application', async function () {
    // browser = await chromium.launch({headless:false});
    // const context = await browser.newContext();
    // page = await context.newPage();
    await pageFixture.page.goto('https://bookcart.azurewebsites.net/')
         });
         
Given('User click on the login link', async function () {
    // await pageFixture.page.locator("//div[@class='d-flex align-items-center']/button[2]").click();
    // await pageFixture.page?.getByRole('button',{name : 'Login'}).click();
    // await pageFixture.page?.locator("//span[normalize-space(text())='Login']").click();
    await pageFixture.page?.locator("(//span[@class='mdc-button__label'])[2]").click();
         });

  
Given('User enter the username as {string}', async function (string) {
    await pageFixture.page?.getByPlaceholder('Username').fill(string);
         });


Given('User enter the password as {string}', async function (string) {
    await pageFixture.page?.locator("(//div[@class='mat-mdc-notch-piece mdc-notched-outline__notch'])[2]/label").fill(string);
         });


When('User click on the login button', async function () {
    await pageFixture.page?.locator("//button[@class='mdc-button mdc-button--raised mat-mdc-raised-button mat-primary mat-mdc-button-base']").click();
         });


Then('Login should be success', async function () {
    const username = await pageFixture.page?.locator("(//span[@class='mdc-button__label'])[2]/span").textContent();
    console.log("Username is "+username);
    expect(username).toContain('TestUser@1');
    // await browser.close();
         });

Then('Login should fail', async function () {
    const failureMessage = await pageFixture.page?.locator("//mat-error[@id='mat-mdc-error-0']");
    await failureMessage.isVisible();
    // await browser.close();
         });


