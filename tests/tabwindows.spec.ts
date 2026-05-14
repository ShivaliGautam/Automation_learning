import {test, expect} from '@playwright/test';
import {TabWindowPage} from '../page/tabwindowPage';
test.describe('Tab and Window Tests', () => {
    let tabWindowPage: TabWindowPage;
    test.beforeEach(async ({page}) => {
        tabWindowPage = new TabWindowPage(page);
        await tabWindowPage.navigateToTabWindow();
    });
    test('Verify new tab opens with correct URL', async ({page}) => {
        await tabWindowPage.verifyNewTabOpensWithCorrectURL();
    });
    test('Open multiple windows and print all window titles',async ({page}) => {
        await tabWindowPage.openMultipleWindowsAndPrintTitles();
    })
    test('Switch back to the parent window after switching to child', async ({page}) => {
        await tabWindowPage.verifyNewTabOpensWithCorrectURL();
    })

    test('Switch back to the child window after switching to parent', async ({page}) => {
        await tabWindowPage.switchBackToChildWindow();
})
})