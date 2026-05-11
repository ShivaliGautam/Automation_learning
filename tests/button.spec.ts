import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.qaplayground.com/practice');
   const heading = page.locator("//h1[contains(text(),'Ready to be a Pro AI Automation Engineer?')]");
  await expect(heading).toBeVisible();
  await page.waitForTimeout(2000);
   await page.getByTestId('card-link-buttons').click();
   await page.waitForTimeout(2000);
});

test('Verify button is clickable and triggers action', async ({ page }) => {
    expect(page.getByText('Button Automation Practice')).toBeVisible();
})

test('Verify button displays the correct label text', async ({ page}) => {
    const button = page.getByRole('button', { name: 'Go To Home' });
    await expect(button).toBeVisible();
})

test('Verify button triggers the correct action on click', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Go To Home' });
    await button.click();
    await expect(page).toHaveURL('https://qaplayground.com/');
    await page.waitForTimeout(2000);
    console.log('Button click navigated to the correct URL');
});
 
test('Verify double-click button triggers double-click action', async ({ page }) => {
    const doubleClickButton = page.getByRole('button', { name: 'Double Click Me' });
    await doubleClickButton.dblclick();
    expect(page.getByText('You Double-clicked on button!')).toBeVisible();
    console.log('Double-click action triggered successfully');
})

test('Verify right-click button triggers context menu action', async ({ page }) => {
    const rightClickButton = page.getByRole('button', { name: 'Right Click Me'});
    await rightClickButton.click({ button: 'right' });
    await page.waitForTimeout(2000);
    expect(page.getByText('You Right-clicked on button!')).toBeVisible();
    await page.waitForTimeout(2000);
    console.log('Right- click action triggered successfully');
})

test('Verify disabled button cannot be clicked', async ({page}) => {
    const disabledButton = page.locator('#btn-disabled');
    await page.waitForTimeout(2000);
    await expect(disabledButton).toBeDisabled();
    await page.waitForTimeout(2000);
    console.log('Disabled button is not clickable as expected ')
})
