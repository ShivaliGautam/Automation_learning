import {test , expect } from '@playwright/test';
import { RadioandcheckboxPage } from '../page/radioandcheckboxPage';
test.describe('Radio Button and Checkbox Tests', () =>{
let radioandcheckboxPage: RadioandcheckboxPage;
test.beforeEach(async ({ page }) => {
    radioandcheckboxPage = new RadioandcheckboxPage(page);
    await radioandcheckboxPage.navigateToRadioandcheckbox();
});
test('Verify radio buttons can be selected', async ({ page }) => {
    await radioandcheckboxPage.selectRadioButton();
});
test('Verify selecting another radio deselects the previous one',async ({ page})=>{
    await radioandcheckboxPage.deselectRadioButton();
});
});
