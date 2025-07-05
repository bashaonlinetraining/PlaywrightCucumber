import { chromium, firefox, webkit } from 'playwright';

export default class Engine {
  static async getBrowserInstance(browserName = 'chromium') {
    switch (browserName) {
      case 'firefox':
        return await firefox.launch({ headless: false });
      case 'webkit':
        return await webkit.launch({ headless: false });
      case 'chromium':
      default:
        return await chromium.launch({ headless: false });
    }
  }

  static async getPageInstance(browserName = 'chromium') {
    const browser = await this.getBrowserInstance(browserName);
    const context = await browser.newContext();
    const page = await context.newPage();
    return { browser, context, page };
  }
}