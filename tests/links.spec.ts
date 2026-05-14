import { test, expect } from '@playwright/test';
import { LinksPage } from '../page/linksPage';
test.describe('Links Tests', () => {
    let linksPage: LinksPage;
    test.beforeEach(async ({ page }) => {
        linksPage = new LinksPage(page);
        await linksPage.navigateToLinks();
    });
    test('Verify link navigates to the correct URL on click', async ({ page }) => {
        await linksPage.verifyLinkNavigation();
    });
    test('Verify link opens in a new tab', async ({ page }) => {
        await linksPage.verifyLinkOpensInNewTab();
    });
    test('Verify broken link returns HTTP error status', async ( {page}) =>{
        await linksPage.verifyBrokenLink();
        await linksPage.verifyBrokenInSameTabLink();
    })
});
    

