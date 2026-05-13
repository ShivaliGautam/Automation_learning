import { test, expect } from '@playwright/test';
import { AlertsanddialogsPage } from '../page/alertsanddialogsPage';

test.describe('Alerts and Dialogs Tests', () => {

  let alertanddialogPage: AlertsanddialogsPage;

  test.beforeEach(async ({ page }) => {
    alertanddialogPage = new AlertsanddialogsPage(page);
    await alertanddialogPage.navigateToAlertsAndDialogs();
  });

  test('Accept a simple browser alert and verify it closes',async ({ page }) => {
      await alertanddialogPage.acceptSimpleAlert();
  });
  test('Get text from a simple browser alert before accepting it', async ({page}) => {
 await alertanddialogPage.getTextFromSimpleAlert();
    });

    test('Accept a confirm dialog and verify accepted state', async ({page})=> {
    await alertanddialogPage.acceptConfirmDialog(); 

});

test('Enter text in a prompt dialog and accept it', async ({page}) =>{
    await alertanddialogPage.enterTextInPromptDialogAndAccept('Playwright');
});
});