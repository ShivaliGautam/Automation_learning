import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.qaplayground.com/practice');
   const heading = page.locator("//h1[contains(text(),'Ready to be a Pro AI Automation Engineer?')]");
  await expect(heading).toBeVisible();
  await page.waitForTimeout(2000);
   await page.getByTestId('practice-card-input-fields').click();
   await page.waitForTimeout(2000);
});

test('Verify successful movie name input', async ({ page }) => {
  await page.getByPlaceholder('Enter hollywood movie name').fill("dhurandhar");
  await page.waitForTimeout(2000);
  console.log('Movie name input successful');
  console.log( await page.getByPlaceholder('Enter hollywood movie name').getAttribute('class'));
  // await page.getByPlaceholder('Enter hollywood movie name').getAttribute('placeholder')
  await page.waitForTimeout(2000);

});

test('Verify input placeholder disappears on typing', async ({ page }) => {
  const inputField = page.getByPlaceholder('Enter hollywood movie name');
  await inputField.fill("dhurandhar")
  const placeholder = await inputField.getAttribute('placeholder');
  console.log(placeholder);
  // Verify input value
  await expect(inputField).toHaveValue('dhurandhar');
  console.log('Input value is: ' + await inputField.inputValue());
})

test('Verify keyboard tab triggers focus change after append', async ({ page }) => {

  const append = page.locator('#appendText');
  const prepend = page.locator('#prependText');

  await append.focus();
  await append.fill('abc');

  await page.keyboard.press('Tab');

  await expect(prepend).toBeFocused();
  console.log('Focus changed to prependText input field after pressing tab key')
});

test('Verify appended text value is retained in the field', async ({page}) => {
  const append = page.locator('#appendText');
  await append.click();;
  await page.keyboard.type('abc');
  await page.waitForTimeout(2000);
  await expect(append).toHaveValue('I am goodabc');
});

test('Verify text present inside input field matches expected value', async ({page}) => {
  const prepend = page.locator('#prependText');
 await expect(prepend).toHaveText('QA PlayGround');
})