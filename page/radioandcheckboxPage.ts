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
}



    