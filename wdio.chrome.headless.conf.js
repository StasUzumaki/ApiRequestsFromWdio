const {config} = require("./wdio.conf");
const path = require("path");


const chromeHeadlessConfig = {
    ...config,
    services: ["chromedriver"],
    capabilities: [{
        maxInstances: 2,
        browserName: "chrome",
        'goog:chromeOptions': {
            args: ['--headless', '--start-maximized', '--no-sandbox', '--disable-gpu', '--window-size=1280,800', '--allow-insecure-localhost']
        },
    }],
    logLevel: 'warn',
    path: "/wd/hub",
};
exports.config = chromeHeadlessConfig;
