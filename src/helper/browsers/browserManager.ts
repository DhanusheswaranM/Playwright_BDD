import { LaunchOptions , chromium , firefox , webkit } from "@playwright/test";

const headlessMode = process.env.npm_config_HEAD === "false"?false:true;

const options: LaunchOptions = {
    headless: headlessMode
}

export const invokeBrowser = () => {
    const browserType = process.env.npm_config_BROWSER || 'chrome';

    switch (browserType) {
        case 'chrome':
            return chromium.launch(options);
        case 'firefox':
            return firefox.launch(options);
        case 'webkit':
            return webkit.launch(options);
        default:
            throw new Error("Please set proper browser");
    }
}