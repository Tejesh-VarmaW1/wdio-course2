describe("Sample test",()=>{
    it("Click app and assert ", async()=>{
        await $('~App').click()

        await $('//android.widget.TextView[@content-desc="Menu"]').click()

        await expect($('~Inflate from XML')).toBeDisplayed();
    })
})