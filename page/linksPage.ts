import { expect } from '@playwright/test';
import { Page } from '@playwright/test';
export class LinksPage {
    constructor(private page: Page) {
       }
       async navigateToLinks(){
        await this.page.goto('https://www.qaplayground.com/practice');
        await this.page.getByTestId('practice-card-links').click();
        await expect(this.page.getByText('Links Automation Practice')).toBeVisible();
       }
         async verifyLinkNavigation() {
            await this.page.getByTestId('link-internal-home').click();
            await expect(this.page).toHaveURL('https://qaplayground.com/');
            await this.page.goBack();
            await this.page.getByTestId('link-internal-about').click();
            await expect(this.page).toHaveURL('https://qaplayground.com/about-us');
         }
         async verifyLinkOpensInNewTab() {
        // 4. Click and switch to new tab
    const [newPage] = await Promise.all([
        this.page.context().waitForEvent('page'),
        this.page.getByTestId('link-external-selenium').click()
    ]);

    await newPage.waitForLoadState('domcontentloaded');

    // 5. Assert new tab URL
    await expect(newPage).toHaveURL('javatpoint.com/selenium-tutorial');
}
async verifyBrokenLink() {
  const [newPage] = await Promise.all([
        this.page.context().waitForEvent('page'),
        this.page.getByTestId('link-broken-newtab').click()
    ]);

    await newPage.waitForLoadState('domcontentloaded');

    await expect(newPage).toHaveURL('https://the-internet.herokuapp.com/status_codes/500');
    await newPage.close();
}
async verifyBrokenInSameTabLink() {
  const [newPage] = await Promise.all([
        // this.page.context().waitForEvent('page'),
        this.page.getByTestId('link-broken-same').click()
    ]);
    await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/status_codes/500');

}
}
