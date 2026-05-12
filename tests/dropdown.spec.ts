import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
   await page.goto('https://www.qaplayground.com/practice');
   const heading = page.locator("//h1[contains(text(),'Ready to be a Pro AI Automation Engineer?')]");
   await expect(heading).toBeVisible();
   await page.waitForTimeout(2000);
   await page.getByTestId('practice-card-dropdowns').click();
   await page.waitForTimeout(2000);
});
test('Select Apple from fruit dropdown by visible text', async ({ page }) => {
    await page.waitForTimeout(2000);
    await page.getByTestId('dropdown-fruit').click();
    await page.waitForTimeout(2000);
    await page.getByRole('option', { name: 'Grapes' }).click();
    await page.waitForTimeout(2000);
    const value = page.getByText('Selected: grapes')
    await expect(value).toBeVisible();
});

test('Get all available options from the programming language dropdown', async ({ page }) => {
  await page.getByTestId('dropdown-language').click();
  const options = await page.locator('[role="option"]').allTextContents();
  console.log(options);
});

test('Select the last option from the programming language dropdown', async ({ page }) => {
     await page.getByTestId('dropdown-language').click();
     const options = await page.locator('[role="option"]').all();
     await page.waitForTimeout(2000);
     const lastOption = options[options.length - 1];
     await page.waitForTimeout(2000);
     await lastOption.click();
     expect(page.getByText('Selected: javascript · Options: Python, Java, JavaScript')).toBeVisible();
     console.log('last option is javascript');
     
})