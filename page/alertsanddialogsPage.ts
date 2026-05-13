import { expect } from "@playwright/test";
import { Page } from '@playwright/test';
export class AlertsanddialogsPage {
    constructor(private page: Page) {

    }
    async navigateToAlertsAndDialogs() {
        await this.page.goto('https://www.qaplayground.com/practice');
        await this.page.getByTestId('practice-card-alerts-dialogs').click();
         await this.page.setDefaultTimeout(4000);
        await expect(this.page.getByText('Alerts & Dialogs Automation Practice')).toBeVisible();
         await this.page.setDefaultTimeout(4000);
    }
    async acceptSimpleAlert() {
    this.page.once('dialog', async dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      await dialog.accept();
    });

    await this.page.getByTestId('btn-simple-alert').click();
}
async getTextFromSimpleAlert() {
    this.page.once('dialog', async dialog => {
      const alertText = dialog.message();
      await dialog.accept();
    });
  await this.page.getByTestId('btn-simple-alert').click();
}
async acceptConfirmDialog() {
    this.page.once('dialog', async dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      await dialog.accept();
    });

    await this.page.getByTestId('btn-confirm-alert').click();
}
async enterTextInPromptDialogAndAccept(inputText: string){
    this.page.once('dialog', async dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        await dialog.type();
        await dialog.accept();
    
    });
    await this.page.getByTestId('btn-prompt-alert').click();
}
    
}