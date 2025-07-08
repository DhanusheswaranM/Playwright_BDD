export{};
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            BROWSER : 'chrome' | 'firefox' | 'webkit';
            ENV : 'test' | 'staging' | 'prod';
            BASE_URL : string;
            HEAD : 'true' | 'false';
        }
    }
}