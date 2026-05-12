import {test , expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
 await page.goto('https://www.qaplayground.com/practice');
  const heading = page.locator("//h1[contains(text(),'Ready to be a Pro AI Automation Engineer?')]");
 await expect(heading).toBeVisible();
 await page.waitForTimeout(2000);
 await page.getByTestId('practice-card-forms').click();
 await page.waitForTimeout(2000);
 expect(page.getByText('Form Automation Practice')).toBeVisible();
})
 
test('Fill all fields with valid data and submit successfully', async ({ page }) => {

  await page.locator("#firstName").fill('Shivali');
  await page.locator('#lastName').fill('Gautam');
  await page.locator('#email').fill('shivali@yopmail.com');
  await page.locator('#phone').fill('9876543456');
 await page.waitForTimeout(2000);
 await page.locator('//input[@id="dob"]').pressSequentially('01011998');
 await page.waitForTimeout(2000);
  await page.locator('#gender-female').check();
   await page.waitForTimeout(2000);
  await page.locator('//button[@id="country"]').click()
 await page.waitForTimeout(2000);
  await page.getByRole('option', { name: 'India' }).click();
 await page.waitForTimeout(2000);
  await page.locator('#city').fill('Noida');
 await page.waitForTimeout(2000);
  await page.locator('//button[@id="interest-selenium"]').check()
 await page.waitForTimeout(2000);
  await page.locator('#password').fill('Shivali@12345');
  await page.locator('#confirmPassword').fill('Shivali@12345');
  await page.locator('//button[@id="terms"]').check();
  await page.waitForTimeout(2000);
  await page.locator('//button[@id="submitFormBtn"]').click();
  await expect(page.getByText('Form Submitted Successfully!')).toBeVisible();
});

test ('Verify required field errors appear on empty submit', async ({ page }) => {
    await page.locator('//button[@id="submitFormBtn"]').click();
    await page.waitForTimeout(2000);
    await page.keyboard.press('PageUp');
    await expect(page.getByText('First name is required')).toBeVisible();
  await expect(page.getByText('Last name is required')).toBeVisible();
  await expect(page.locator('#email').locator('..').getByText('Email is required')
).toBeVisible();
//   await expect(page.getByText('Email is required.')).toBeVisible();
  await expect(page.getByText('Phone number is required')).toBeVisible();
  await expect(page.getByText('Date of birth is required')).toBeVisible();
  await expect(page.getByText('Please select a gender')).toBeVisible();
  await expect(page.getByText('City is required')).toBeVisible();
  await expect(page.getByText('Password is required')).toBeVisible();
  await expect(page.getByText('Please confirm your password.')).toBeVisible();
  await expect(page.getByText('You must accept the terms.')).toBeVisible();
});

test('Verify invalid email format shows validation error', async ({ page }) => {
  await page.locator('#email').fill('invalid-email');
  await page.locator('//button[@id="submitFormBtn"]').click();
  await page.waitForTimeout(2000);
   await page.keyboard.press('PageUp');
  await expect(page.locator('#email').locator('..').getByText('Enter a valid email address.')).toBeVisible();
});

