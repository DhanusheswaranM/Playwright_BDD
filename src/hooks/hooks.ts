import { Before , After , BeforeAll , AfterAll , Status} from "@cucumber/cucumber";
import { chromium, Browser, Page, BrowserContext } from '@playwright/test';
import { pageFixture } from "./pageFixture";
import { getEnv } from "../helper/env/env";
import { invokeBrowser } from "../helper/browsers/browserManager";
import { options } from './../helper/Util/logger';
import { createLogger } from "winston";

let browser : Browser;
let context : BrowserContext;

BeforeAll(async function(){
    getEnv();
    browser = await invokeBrowser();
});

Before (async function ({pickle}) {
    const scenarioName = pickle.name +" "+ pickle.id ;
    context = await browser.newContext();
    const page = await context.newPage();
    pageFixture.page = page;
    pageFixture.logger = createLogger(options(scenarioName));
});

After (async function ({pickle , result}) {
    console.log(result?.status);
    if(result?.status == Status.FAILED){
        const img = await pageFixture.page?.screenshot({path :`./test-result/screenshots/${pickle.name}.png`,type:"png"})
        await this.attach(img, "image/png");
    }
    await pageFixture.page.close();
    await context.close();
});

AfterAll(async function () {
    
    await pageFixture.logger?.close();
    await browser.close();
})