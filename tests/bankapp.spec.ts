import { test, expect } from '@playwright/test';
import { BankappPage } from '../page/bankappPage';
import { bankappData } from '../data/bankappData';
import dotenv from 'dotenv';

dotenv.config();

const BANK_APP_URL = process.env.BANK_APP_URL || 'https://qaplayground.com/bank';

test.describe('Bank App Tests', () => {
  let bankappPage: BankappPage;

  test.beforeEach(async ({ page }) => {
    bankappPage = new BankappPage(page);
    await bankappPage.goto(BANK_APP_URL);
  });

  test('Verify page loads', async () => {
    const title = await bankappPage.getTitle();
    expect(title).toBeTruthy();
  });

  test('Verify login with valid credentials', async () => {
    await bankappPage.login(bankappData.username, bankappData.password);
    await bankappPage.verifyLoginSuccess();
  });
  test('Verify logout from the system ',async () =>{
    await bankappPage.login(bankappData.username, bankappData.password);
    await bankappPage.logout();
  })
  test('Failed login shows error alert for invalid credentials', async() =>{
    await bankappPage.wrongCredential(bankappData.username,bankappData.wrongpassword)
  })
  test('Toggle password visibility hides and reveals password text', async()=>{
    await bankappPage.passwordToggleFunctionality(bankappData.username, bankappData.password)
  })
  test('Pressing Enter in the password field submits the login form',async()=>{
    await bankappPage.submitLoginForm(bankappData.username, bankappData.password)
    await bankappPage.verifyLoginSuccess();
  })
});
