import { test, expect } from '@playwright/test';
import { DatatablePage } from '../page/datatablePage';

test.describe('DataTable Tests', () => {

  let datatablePage: DatatablePage;

  test.beforeEach(async ({ page }) => {
    datatablePage = new DatatablePage(page);

    await datatablePage.navigateToDatatable();
  });


  test.beforeEach(async ({ page }) => {
    await datatablePage.navigateToDatatable();
  });

  test('Verify all table column headers are present', async ({ page }) => {
    await datatablePage.getColumnHeaders();
  });

  test('Count the total number of rows in the data table', async ({ page }) => {
    await datatablePage.countTableRows();
  })

  test('Read a cell value from a specific row and column',async ({ page }) => {
    await datatablePage.readCellValue(1, 3);
  })

})