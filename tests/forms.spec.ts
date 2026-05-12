import { test } from '@playwright/test'; // for learning purpose
import { FormPage } from '../pages/formPage';

test.describe('Form Tests', () => {

  test.beforeEach(async ({ page }) => {

    const formPage = new FormPage(page);

    await formPage.navigateToForm();
  });

  test('Fill all fields with valid data and submit successfully',
    async ({ page }) => {

      const formPage = new FormPage(page);

      await formPage.fillForm();

      await formPage.submitForm();

      await formPage.verifySuccessMessage();
  });

  test('Verify required field errors appear on empty submit',
    async ({ page }) => {

      const formPage = new FormPage(page);

      await formPage.submitForm();

      await formPage.verifyRequiredFieldErrors();
  });

  test('Verify invalid email format shows validation error',
    async ({ page }) => {

      const formPage = new FormPage(page);

      await page.locator('#email').fill('invalid-email');

      await formPage.submitForm();

      await formPage.verifyInvalidEmailError();
  });
});