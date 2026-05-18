import { Page, expect } from '@playwright/test';

export class BankappPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string) {
    await this.page.goto(url);
  }

  async login(username: string, password: string) {
    await this.page.fill('input[name="username"]', username);
    await this.page.fill('input[name="password"]', password);
    await this.page.click('button[type="submit"]');
    await this.page.waitForLoadState('networkidle');
  }

  async verifyLoginSuccess() {
    await expect(this.page.locator('//span[text()="SecureBank"]')).toBeVisible();
  }

  async getTitle() {
    return await this.page.title();
  }
async logout(){
     // Handle confirmation dialog
    this.page.once('dialog', async dialog => {

        console.log(dialog.message());

        await dialog.accept();
    });

    // Click logout
    await this.page.getByText('Logout').click();

    // Validation after logout
    await expect(
        this.page.getByText('Automation Testing Practice Application')
    ).toBeVisible();
}

}
