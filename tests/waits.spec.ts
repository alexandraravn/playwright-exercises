import { test, expect } from '@playwright/test';
import { time } from 'console';

test('TST01- Wait for time out', async ({ page }) => {
    await page.goto('https://practice-automation.com/javascript-delays/');

    await page.locator('id=start').click();
    //Tengo dudas con esto: es un pseudo element y para poder usar ese method debo usar: window.getComputedStyle , no entendí eso
    //await expect(page.locator('input[id=delay]')).toContainText('Liftoff!');

    await page.waitForTimeout(12000)  

    const timerInput = page.locator('input[id=delay]');
    await expect(timerInput).toHaveValue('Liftoff!');
    await timerInput.screenshot();
    

  });

  test('TST02- Wait for', async ({ page }) => {
    await page.goto('https://practice-automation.com/ads/');

    await page.locator('xpath=//div[@id= "popmake-1272"]/button[@class= "pum-close popmake-close"]').waitFor({state: 'visible'})

  });