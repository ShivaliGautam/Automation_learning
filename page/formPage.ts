import { Page, expect } from '@playwright/test';

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

    await this.page.locator(this.firstName).fill('Shivali');

    await this.page.locator(this.lastName).fill('Gautam');

    await this.page.locator(this.email)
      .fill('shivali@yopmail.com');

    await this.page.locator(this.phone)
      .fill('9876543456');

    await this.page.locator(this.dob)
      .pressSequentially('01011998');

    await this.page.locator(this.genderFemale).check();

    await this.page.locator(this.country).click();

    await this.page.getByRole('option', {
      name: 'India'
    }).click();

    await this.page.locator(this.city).fill('Noida');

    await this.page.locator(this.seleniumInterest).click();

    await this.page.locator(this.password)
      .fill('Shivali@12345');

    await this.page.locator(this.confirmPassword)
      .fill('Shivali@12345');

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