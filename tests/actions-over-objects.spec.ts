import { test, expect } from '@playwright/test';
import generateRandomString from './helper/random-number-generator';

test('TST01-Form-Fields', async ({ page }) => {
    await page.goto('https://practice-automation.com/form-fields/');

    await page.locator('id=name-input').click();
    await page.locator('id=name-input').fill('Alexandra');

    //Check favorite drink option
    const drinks = ['Water', 'Coffee', 'Wine'];
    for(const drink of drinks ){
        await page.check(`input[type="checkbox"][value="${drink}"]`);
    }
    //Select favorite color option
    await page.check('input[type="radio"][value="Red"]');
    // Select option from: Do you have any siblings?
    await page.locator('id=siblings').selectOption('Yes');
    //Assert Fast Animals list
    await expect(page.locator('ul > li')).toContainText(['Falcon', 'Eagle', 'Horsefly', 'Cheetah']);
    //Type email
    await page.locator('id=email').click();
    await page.locator('id=email').fill(`${generateRandomString(6)}@email.com`);
    //Type message
    await page.locator('id=message').click();
    await page.locator('id=message').fill('Testing text area');
    await page.locator('id=submit-btn').click();
});

test('TST02-Windows-Operations', async({ page, context }) =>{
    await page.goto('https://practice-automation.com/window-operations/');
    //New Tab
    await page.getByRole('button', { name: 'New Tab' }).click();
    await page.waitForTimeout(10000);
    const pages = await context.pages();
    await pages[1].close()

    await page.getByRole('button', { name: 'Replace Window' }).click();
    const logoImage = await page.locator('xpath=//a[@class="logo logo-left with-image   "]');
    await expect(logoImage).toBeVisible({timeout: 10000});
    await page.goBack();

    // await page.getByRole('button', { name: 'New Window' }).click();
    // await pages[1].close()
});

test('TST03-File-Upload', async({ page }) =>{
    await page.goto('https://practice-automation.com/file-upload/');

    const fileUpload= await page.locator('xpath=//input[@type="file"]');
    await fileUpload.setInputFiles("/Users/ravn009/Downloads/TESTING DOC.pdf");
    await page.locator('id=upload-btn').click();
});

test('TST04-iFrames', async({ page }) =>{
    await page.goto('https://practice-automation.com/iframes/');

    const natGeoFrame = await page.frame('id=frame2');
    await natGeoFrame?.locator('xpath=//button[@class="Button Button--default UserMenu__Link"]')
    //await natGeoFrame?.locator('xpath=button[@aria-label="Close Message"]').click();

});

test('TST05-Sliders', async({ page }) =>{
    await page.goto('https://practice-automation.com/slider/');

});

test('TST06-Tables', async({ page }) =>{
    await page.goto('https://practice-automation.com/tables/');

    const searchDataInTable = await page.locator('input[aria-controls="tablepress-1"]');
    await searchDataInTable.click();
    await searchDataInTable.fill('India');
});



