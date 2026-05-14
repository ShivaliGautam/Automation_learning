import { expect } from "@playwright/test";
import { Page } from '@playwright/test';
export class RadioandcheckboxPage {
    constructor(private page: Page) {
    }
    async navigateToRadioandcheckbox(){
        await this.page.goto('https://www.qaplayground.com/practice');
        await this.page.getByTestId('practice-card-radio-checkbox').click();
        await expect(this.page.getByText('Radio & Checkbox Automation Practice')).toBeVisible();
    }
    async selectRadioButton() {
        await this.page.getByTestId('radio-yes-1').check();
        await expect(this.page.getByTestId('radio-yes-1')).toBeChecked();
    }
    async deselectRadioButton() {
        await this.page.getByTestId('radio-yes-1').check();
        await this.page.waitForTimeout(2000)
        await this.page.getByTestId('radio-no-1').check();
        await this.page.waitForTimeout(2000)
        await expect(this.page.getByTestId('radio-yes-1')).not.toBeChecked();
        await this.page.waitForTimeout(2000)
        await expect(this.page.getByTestId('radio-no-1')).toBeChecked();
    }
    async verifyOnlyOneRadioButtonCanBeSelected() {
        await this.page.getByTestId('radio-yes-1').check();
        await this.page.waitForTimeout(2000)
        await this.page.getByTestId('radio-no-1').check();
        await this.page.waitForTimeout(2000)
        const isYesChecked = await this.page.getByTestId('radio-yes-1').isChecked();
        const isNoChecked = await this.page.getByTestId('radio-no-1').isChecked();
        expect(isYesChecked).toBeFalsy();
        expect(isNoChecked).toBeTruthy();
    }
   async verifyRadioButtonLabelText() {
    const yesLabel = await this.page.getByTestId('radio-yes-1').locator('..').textContent();
    const noLabel = await this.page.getByTestId('radio-no-1').locator('..').textContent();
    expect(yesLabel?.trim()).toBe('Yes');
    expect(noLabel?.trim()).toBe('No');
}
async verifyRadioButtonStatePersistsAfterPageInteraction() {
    await this.page.getByTestId('radio-yes-1').check();
    await this.page.waitForTimeout(2000)
    await this.page.getByTestId('checkbox-option-1').check();
    await this.page.waitForTimeout(2000)
    const isYesChecked = await this.page.getByTestId('radio-yes-1').isChecked();
    expect(isYesChecked).toBeTruthy();
}
async verifyCheckboxCanBeCheckedAndUnchecked() {
    const checkbox = this.page.getByTestId('checkbox-remember-me');
    await this.page.keyboard.press( 'PageDown');
   // Verify checkbox is checked by default
    await expect(checkbox).toBeChecked();
// Uncheck checkbox
    await checkbox.uncheck();

    // Verify unchecked
    await expect(checkbox).not.toBeChecked();

    // Check again
    await checkbox.check();

    // Verify checked again
    await expect(checkbox).toBeChecked();
}
}


    