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
async wrongCredential(username: string, wrongpassword: string){
    await this.page.fill('input[name="username"]', username);
     await this.page.fill('input[name="password"]',wrongpassword);
      await this.page.click('button[type="submit"]');
    await expect(
        this.page.getByText('Invalid username or password. Please try again.')
    ).toBeVisible();
}
async passwordToggleFunctionality(username: string, password: string){
   // Enter username
    await this.page.fill('input[name="username"]', username);

    // Enter password
    await this.page.fill('input[name="password"]', password);

    // Verify password is hidden initially
    await expect(
        this.page.locator('input[name="password"]')
    ).toHaveAttribute('type', 'password');

    console.log("Password is hidden");

    // Click toggle button to show password
    await this.page.locator('[data-testid="toggle-password-btn"]').click();

    // Verify password is visible
    await expect(
        this.page.locator('input[name="password"]')
    ).toHaveAttribute('type', 'text');

    // Print visible password value
    const visiblePassword = await this.page
        .locator('input[name="password"]')
        .inputValue();

    console.log("Visible Password:", visiblePassword);

    // Click toggle button again to hide password
    await this.page.locator('[data-testid="toggle-password-btn"]').click();

    // Verify password is hidden again
    await expect(
        this.page.locator('input[name="password"]')
    ).toHaveAttribute('type', 'password');

    // Print hidden password value
    const hiddenPassword = await this.page
        .locator('input[name="password"]')
        .isVisible();

    console.log("Hidden Password:", hiddenPassword);

    console.log("Password is hidden again");
      await this.page.screenshot({
        path: 'screenshots/password-toggle.png',
        fullPage: false
      })
}
async submitLoginForm(username: string, password: string ){
   // Enter username
    await this.page.fill('input[name="username"]', username);
    // Enter password
    await this.page.fill('input[name="password"]', password);
    await this.page.keyboard.press('Enter')
}
}

