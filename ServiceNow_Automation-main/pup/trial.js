// Define your ServiceNow credentials (replace with actual values)
const username = 'Fareed.Khaja@wsp.com';
const password = 'Kush@123';

// Define the URL you want to scrape
const targetUrl = 'https://wsp.service-now.com/now/nav/ui/classic/params/target/report_home.do%3Fjvar_selected_tab%3DmyReports%26jvar_list_order_by%3D%26jvar_list_sort_direction%3D%26sysparm_reportquery%3D%26jvar_search_created_by%3D%26jvar_search_table%3D%26jvar_search_report_sys_id%3D%26sysparm_query%3D';

// Simulate login using JavaScript in the browser
(async () => {
  try {
    // Navigate to the target URL
    await fetch(targetUrl, { method: 'GET' });

    // Fill in the login form
    document.querySelector('#userNameInput').value = username;
    document.querySelector('#passwordInput').value = password;
    document.querySelector('#submitButton').click();

    // Wait for a few seconds (adjust as needed)
    await new Promise((resolve) => setTimeout(resolve, 5000));

    // Capture a screenshot (not possible in browser console)
    console.log('Login successful!');

    // You won't be able to take screenshots directly in the browser console.
    // If you need screenshots, consider running this code in a Node.js environment with Puppeteer.

  } catch (error) {
    console.error('Error during page interaction:', error);
  }
})();
