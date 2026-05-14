import {expect} from '@playwright/test';
import {Page} from '@playwright/test';
export class TabWindowPage {
    constructor(private page: any) {
    }
    async navigateToTabWindow() {
        await this.page.goto('https://www.qaplayground.com/practice');
        await this.page.getByTestId('practice-card-tabs-windows').click();
        await expect(this.page.getByText('Tabs & Windows Automation Practice')).toBeVisible();
    }
    async verifyNewTabOpensWithCorrectURL() {
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.page.getByTestId('btn-open-home-tab').click()
        ]);
        await expect(newPage).toHaveURL('https://qaplayground.com/');
    }
    async openMultipleWindowsAndPrintTitles() {
     
    const [window1] = await Promise.all([
        this.page.context().waitForEvent('page'),
        this.page.getByTestId('btn-open-home-tab').click()
    ]);

    const [window2] = await Promise.all([
        this.page.context().waitForEvent('page'),
        this.page.getByTestId('btn-open-multiple-windows').click()
    ]);

    await window1.waitForLoadState();
    await window2.waitForLoadState();

    console.log(await window1.title());
    console.log(await window2.title());
}
async switchBackToParentWindow() {
    const parentPage = this.page;
    const [childPage] = await Promise.all([
        this.page.context().waitForEvent('page'),
        this.page.getByTestId('btn-open-home-tab').click()
    ]);
    await childPage.close();
    await expect(parentPage).toBeVisible();
}
async switchBackToChildWindow() {
    const parentPage = this.page;
    const [childPage] = await Promise.all([
        this.page.context().waitForEvent('page'),
        this.page.getByTestId('btn-open-home-tab').click()
    ]);

    await childPage.waitForLoadState();

    // Do something in child tab (optional)
    console.log(await childPage.title());

    // Close child tab
    await childPage.close();

    // Switch back to parent tab
    await parentPage.bringToFront();
}
}