import { Given, When, Then, BeforeAll, AfterAll, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import Engine from '../../support/Engine.js';
import dotenv from 'dotenv';

dotenv.config();
setDefaultTimeout(60 * 1000);

const browserName = process.env.BROWSER
  ? process.env.BROWSER.split(',')[0].trim()
  : 'chromium';

class LoginSteps {
  constructor() {
    this.browser = null;
    this.context = null;
    this.page = null;
  }

  async launchBrowser() {
    const { browser, context, page } = await Engine.getPageInstance(browserName);
    this.browser = browser;
    this.context = context;
    this.page = page;
  }

  async closeBrowser() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

const loginSteps = new LoginSteps();

BeforeAll(async function () {
  await loginSteps.launchBrowser();
});

AfterAll(async function () {
  await loginSteps.closeBrowser();
});

Given('the user is on the login page', async function () {
  await loginSteps.page.goto('https://www.demoblaze.com/');
  await loginSteps.page.click('#login2');
});

When('the user enters a valid username and password', async function () {
  await loginSteps.page.fill('#loginusername', 'testing@tes435.com');
  await loginSteps.page.fill('#loginpassword', 'Testing');
});

When('clicks the login button', async function () {
  await loginSteps.page.click("//button[text()='Log in']");
});

Then('the user should be redirected to the dashboard', async function () {
  await loginSteps.page.waitForSelector('#nameofuser', { timeout: 5000 });
  const value = await loginSteps.page.locator('#nameofuser').textContent();
  expect(value).toContain('testing@tes435.com');
});

When('the user enters {string} and {string}', async function (username, password) {
  await loginSteps.page.fill('#loginusername', username);
  await loginSteps.page.fill('#loginpassword', password);
});

// Export for use in other step files (like ContactSteps.js)
export { loginSteps };