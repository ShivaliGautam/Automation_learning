import { expect } from "@playwright/test";
import { Page } from '@playwright/test';
export class DatatablePage {
    constructor(private page: Page) {

    }
    async navigateToDatatable() {
        await this.page.goto('https://www.qaplayground.com/practice');
        await this.page.getByTestId('practice-card-data-table').click();
        await expect(this.page.getByText('Data Table Automation Practice')).toBeVisible();
    }

    async getColumnHeaders() {
  await expect(this.page.getByText('Sr No.')).toBeVisible();

  await expect(this.page.getByText('Book Name')).toBeVisible();

  await expect(this.page.getByText('Book Author')).toBeVisible();

  await expect(this.page.getByText('Book ISBN')).toBeVisible();

  await expect(this.page.getByText('Book Published')).toBeVisible();
}

    async countTableRows() {
     const rows = await this.page.getByRole('row');
        const count = await rows.count();
        console.log(`Total number of rows: ${count}`);
        return rows;
    }

    async readCellValue(row: number , colum: number) {
        const cell = await this.page.getByRole('row').nth(row).getByRole('cell').nth(colum)
        const value =await cell.textContent();
        console.log(`Value at row ${row} and column ${colum} is: ${value}`);
        return value;
    }
}
