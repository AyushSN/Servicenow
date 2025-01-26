import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

const username = 'Fareed.Khaja@wsp.com';
const password = 'Kush@123';
const targetUrl = 'https://wsp.service-now.com/incident_list.do?sysparm_query=assignment_group%3D9923ad2e871082d0fb900f6d0ebb357b%5Eassigned_to.nameSTARTSWITHabhishek%5Estate!%3D6%5Estate!%3D7%5Estate!%3D8%5Eassignment_group.name%3E%3Dabhishek&sysparm_first_row=1&sysparm_view=&sysparm_choice_query_raw=state!%3DCanceled&sysparm_list_header_search=true';
const Url='https://wsp.service-now.com/incident_list.do?sysparm_first_row=1&sysparm_query=assignment_group%3d9923ad2e871082d0fb900f6d0ebb357b%5eassigned_toISNOTEMPTY%5estate!%3d6%5estate!%3d7%5estate!%3d8%5eGOTOassigned_to.name%3e%3dabhishek&sysparm_query_encoded=assignment_group%3d9923ad2e871082d0fb900f6d0ebb357b%5eassigned_toISNOTEMPTY%5estate!%3d6%5estate!%3d7%5estate!%3d8%5eGOTOassigned_to.name%3e%3dabhishek&sysparm_view=';
(async () => {
  try {
    // const browser = await puppeteer.launch({ headless: false });
    // const page = await browser.newPage();
    // await page.goto(Url);
    // await page.screenshot({ path: 'login.png' });
    // await page.type('#userNameInput', username);
    // await page.type('#passwordInput', password);
    // await page.click('#submitButton');
    // await page.waitForNavigation();
    // await page.waitForNavigation();
    // await page.screenshot({ path: 'servicenow.png' });
    // console.log('Login successful!');
    // await page.focus('.list_header_search.form-control.form-control-search');
    // await page.keyboard.type('abhishek');
    // await page.keyboard.press('Enter');
    // console.log('Search for "abhishek" completed.');

    const browser = await puppeteer.launch({ headless: false, defaultViewport: null, args: ['--start-maximized'] });
    const page = await browser.newPage();
    await page.goto(targetUrl);
    await page.screenshot({ path: 'login.png' });
    await page.type('#userNameInput', username);
    await page.type('#passwordInput', password);
    await page.click('#submitButton');

    await page.waitForNavigation();
    await page.waitForNavigation();
    await page.screenshot({ path: 'servicenow.png' });
    const incidentRows = await page.$$('table.incident_table tr');
    const incidents = [];
    for (const row of incidentRows) {
    const columns = await row.$$('td');
    const incident = {};
    for (const [index, column] of columns.entries()) {
    const text = await column.evaluate((el) => el.textContent);
    switch (index) {
    case 0:
    incident.number = text;
    break;
    case 1:
    incident.short_description = text;
    break;
    case 2:
    incident.assignment_group = text;
    break;
    default:
    break;
    }
    }

incidents.push(incident);
}

console.log('Incidents:', incidents);
    await browser.close();
  } catch (error) {
    console.error('Error during page interaction:', error);
  }
})();
