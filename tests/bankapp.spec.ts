import { test, expect } from '@playwright/test';
import { BankappPage } from '../page/bankappPage';
import { bankappData } from '../data/bankappData';
import dotenv from 'dotenv';

dotenv.config();

const BANK_APP_URL = process.env.BANK_APP_URL;

test.describe('Bank App Tests', () => {
  let bankappPage: BankappPage;

  test.beforeEach(async ({ page }) => {
    bankappPage = new BankappPage(page);
    await bankappPage.goto(BANK_APP_URL);
  });

//   test('Verify page loads', async () => {
//     const title = await bankappPage.getTitle();
//     expect(title).toBeTruthy();
//   });

//   test('Verify login with valid credentials', async () => {
//     await bankappPage.login(bankappData.username, bankappData.password);
//     await bankappPage.verifyLoginSuccess();
//   });
  test('Verify logout from the system ',async () =>{
    await bankappPage.login(bankappData.username, bankappData.password);
    await bankappPage.logout();
  })
});
