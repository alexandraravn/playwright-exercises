import { test, expect } from '@playwright/test';

test('TST01-Add product Sauce Labs Bike Light', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('id=user-name').click();
  await page.locator('id=user-name').fill('standard_user');
  await page.locator('id=password').click();
  await page.locator('id=password').fill('secret_sauce');
  await page.locator('id=login-button').click();
  await page
  .locator('xpath=//div[@class = "inventory_item"]')
  .filter({hasText: 'Sauce Labs Bike Light'})
  .locator('button:text("Add to cart")')
  .click();
});

test('TST02-Add product Sauce Labs Backpack', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('id=user-name').click();
  await page.locator('id=user-name').fill('standard_user');
  await page.locator('id=password').click();
  await page.locator('id=password').fill('secret_sauce');
  await page.locator('id=login-button').click();
  await page
  .locator('xpath=//div[@class = "inventory_item"]')
  .filter({hasText: 'Sauce Labs Backpack'})
  .locator('button:text("Add to cart")')
  .click();
});

test('TST03-Add product Sauce Labs T-Shirt', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('id=user-name').click();
  await page.locator('id=user-name').fill('standard_user');
  await page.locator('id=password').click();
  await page.locator('id=password').fill('secret_sauce');
  await page.locator('id=login-button').click();
  await page
  .locator('xpath=//div[@class = "inventory_item"]')
  .filter({hasText: 'Sauce Labs T-Shirt'})
  .locator('button:text("Add to cart")')
  .click();
});

test('TST04-Add multiple product', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('id=user-name').click();
  await page.locator('id=user-name').fill('standard_user');
  await page.locator('id=password').click();
  await page.locator('id=password').fill('secret_sauce');
  await page.locator('id=login-button').click();

  const products = ['Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Backpack'];

  for(const product of products){
  await page
  .locator('xpath=//div[@class = "inventory_item"]')
  .filter({hasText: product})
  .locator('button:text("Add to cart")')
  .click();
  }
});