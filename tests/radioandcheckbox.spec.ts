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
test('Verify only one radio button can be selected at a time', async ({ page }) => {
    await radioandcheckboxPage.verifyOnlyOneRadioButtonCanBeSelected();
})

test('Verify radio button label text is correct', async ({ page}) => {
    await radioandcheckboxPage.verifyRadioButtonLabelText();
})
test('Verify radio button state persists after page interaction', async ({ page }) => {
    await radioandcheckboxPage.verifyRadioButtonStatePersistsAfterPageInteraction();
})
test('Verify checkbox can be checked and unchecked', async ({ page }) => {
    await radioandcheckboxPage.verifyCheckboxCanBeCheckedAndUnchecked();
})
})


