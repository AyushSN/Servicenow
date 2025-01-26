import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

puppeteer.use(StealthPlugin());

const username = 'Fareed.Khaja@wsp.com';
const password = 'Kush@123';
const Url = 'https://wsp.service-now.com/now/nav/ui/classic/params/target/incident_list.do%3Fsysparm_query%3Dassignment_group%253D9923ad2e871082d0fb900f6d0ebb357b%255Eassigned_toISNOTEMPTY%255Estate%253D2%26sysparm_first_row%3D1%26sysparm_view%3D';

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: false, defaultViewport: null, args: ['--start-maximized'] });
    const page = await browser.newPage();
    await page.goto(Url);
    await page.screenshot({ path: 'login.png' });
    await page.type('#userNameInput', username);
    await page.type('#passwordInput', password);
    await page.click('#submitButton');

    await page.waitForNavigation();
    await page.waitForNavigation();
    await page.screenshot({ path: 'servicenow.png' });


    const element = await page.$('[data-type="list2_hdrcell"]');
    await element.click({ button: 'right' });
    await page.waitForSelector('div[data-context-menu-label="Export"]');



    await browser.close();
  } catch (error) {
    console.error('Error during page interaction:', error);
  }
})();
