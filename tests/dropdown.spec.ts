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
await page.selectOption('#dropdown-fruit', { label : 'Grapes'});
await page.waitForTimeout(2000);
 })
