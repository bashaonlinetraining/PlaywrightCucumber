class LoginPage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    this.page = page;
    this.loginButton = '#login2';
    this.usernameInput = '#loginusername';
    this.passwordInput = '#loginpassword';
    this.submitButton = "//button[text()='Log in']";
    this.nameOfUser = '#nameofuser';
  }

  async goto() {
    await this.page.goto('https://www.demoblaze.com/');
  }

  async openLoginModal() {
    await this.page.click(this.loginButton);
  }

  async enterCredentials(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
  }

  async submit() {
    await this.page.click(this.submitButton);
  }

  async getWelcomeText() {
    await this.page.waitForSelector(this.nameOfUser, { timeout: 5000 });
    return this.page.textContent(this.nameOfUser);
  }
}

module.exports = LoginPage;