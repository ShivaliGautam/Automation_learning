import { Page, expect } from '@playwright/test';
import { formData } from '../data/formData';

export class FormPage {

  constructor(private page: Page) {}

  // Locators
  firstName = '#firstName';
  lastName = '#lastName';
  email = '#email';
  phone = '#phone';
  dob = '#dob';
  genderFemale = '#gender-female';
  country = '#country';
  city = '#city';
  seleniumInterest = '#interest-selenium';
  password = '#password';
  confirmPassword = '#confirmPassword';
  terms = '#terms';
  submitBtn = '#submitFormBtn';

  async navigateToForm() {

    await this.page.goto('https://www.qaplayground.com/practice');

    await this.page.getByTestId('practice-card-forms').click();

    await expect(
      this.page.getByText('Form Automation Practice')
    ).toBeVisible();
  }

  async fillForm() {

    await this.page.locator(this.firstName).fill(formData.firstName);

    await this.page.locator(this.lastName).fill(formData.lastName);

    await this.page.locator(this.email)
      .fill(formData.email);

    await this.page.locator(this.phone)
      .fill(formData.phone);

    await this.page.locator(this.dob)
      .pressSequentially(formData.dob);

    await this.page.locator(this.genderFemale).check();

    await this.page.locator(this.country).click();

    await this.page.getByRole('option', {
      name: formData.country
    }).click();

    await this.page.locator(this.city).fill(formData.city);

    await this.page.locator(this.seleniumInterest).click();

    await this.page.locator(this.password)
      .fill(formData.password);

    await this.page.locator(this.confirmPassword)
      .fill(formData.confirmPassword);

    await this.page.locator(this.terms).click();
  }

  async submitForm() {
    await this.page.locator(this.submitBtn).click();
  }

  async verifySuccessMessage() {

    await expect(
      this.page.getByText('Form Submitted Successfully!')
    ).toBeVisible();
  }

  async verifyRequiredFieldErrors() {

    await expect(
      this.page.getByText('First name is required')
    ).toBeVisible();

    await expect(
      this.page.getByText('Last name is required')
    ).toBeVisible();

    await expect(
      this.page.locator('#email')
        .locator('..')
        .getByText('Email is required')
    ).toBeVisible();
  }

  async verifyInvalidEmailError() {

    await expect(
      this.page.locator('#email')
        .locator('..')
        .getByText('Enter a valid email address.')
    ).toBeVisible();
  }
}