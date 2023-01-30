import iosSampleScreen from "../../screenobject/ios/ios-sample.screen.js"

describe("IOS sample test",()=>{
    it("Test 1",async()=>{

        await iosSampleScreen.login("standard_user","secret_sauce")
    })
})