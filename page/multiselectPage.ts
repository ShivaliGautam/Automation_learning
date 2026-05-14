import {expect} from '@playwright/test';
import {Page} from '@playwright/test';
export class MultiselectPage {
    constructor(private page: any) {
    }
    async navigateToTabWindow() {
        await this.page.goto('https://www.qaplayground.com/practice');
        await this.page.getByTestId('practice-card-multi-select').click();
        await expect(this.page.getByText('Multi-Select Automation Practice')).toBeVisible();
    }
    async mutiselectFruits(){
    // Locate multi-select dropdown
    const fruitDropdown = this.page.getByTestId('fruit-multi-select');

    // 3. Select multiple options
    await fruitDropdown.selectOption([
        'apple',
        'banana',
        'grapes'
    ]);

    //  Validate selected output
    const output = this.page.getByTestId('fruit-selected-output');

    await expect(output).toContainText('apple');
    await expect(output).toContainText('banana');
}
 async deselectPlaywrightSkill() {

        // Locate skills dropdown
        const skillsDropdown =
            this.page.getByTestId('skills-multi-select');

        // Select only remaining options
        // Playwright gets deselected automatically
        await skillsDropdown.selectOption([
            'selenium',
            'cypress'
        ]);

        // Validate Playwright removed
        const output =this.page.getByTestId('skills-selected-output');
        await expect(output).not.toContainText('playwright');
    }
    async selectAllCountry(){
    // Scroll down the page
    await this.page.keyboard.press('PageDown');

    // Click Select All button
    await this.page.locator('[data-testid="select-all-btn"]').click()

    // Get selected countries text
    const selectedCountries = await this.page
        .getByTestId('countryMultiSelect')
        .textContent();

    // Print selected countries
    console.log(selectedCountries);
}
}