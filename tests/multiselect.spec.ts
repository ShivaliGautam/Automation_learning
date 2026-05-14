import {test} from '@playwright/test';
import {MultiselectPage} from '../page/multiselectPage';
test.describe('Tab and Window Tests', () => {
    let multiselectPage: MultiselectPage;
    test.beforeEach(async ({page}) => {
        multiselectPage = new MultiselectPage(page);
        await multiselectPage.navigateToTabWindow();
    });
//     test('Select multiple fruits using Ctrl+click in a native multi-select',async({page})=>
//     {
//         await multiselectPage.mutiselectFruits();
//     });
//     test('Deselect a specific option from a pre-selected multi-select', async({page})=>{
//         await multiselectPage.deselectPlaywrightSkill();
// });
test('Select all countries using the Select All button',async ({page})=>{
    await multiselectPage.selectAllCountry();
})
})