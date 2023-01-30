import { config } from "../wdio.conf.js"

config.specs = [
    // ToDo: define location for spec files here
    'C:/Cigna/wdio-pres/test/specs/ios/ios-session.spec.js'
],

config.capabilities= [{
    
    // maxInstances can get overwritten per capability. So if you have an in-house Selenium
    // grid with only 5 firefox instances available you can make sure that not more than
    // 5 instances get started at a time.
    platformName:"ios",
    platformVersion:"15.0",
    deviceName:"iPhone 13 Mini",
    automationName:"XCUITest",
    app:"bs://f5eedb5a855870ca02bfa47dd89da9644d7f25e8"

    // If outputDir is provided WebdriverIO can capture driver session logs
    // it is possible to configure which logTypes to include/exclude.
    // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
    // excludeDriverLogs: ['bugreport', 'server'],
}]

exports.config=config;