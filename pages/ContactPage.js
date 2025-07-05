export default class ContactPage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    this.page = page;
    this.contactNav =  "//a[text()='Contact']";
    this.contactModal = '#exampleModal';
    this.emailInput = '#recipient-email';
    this.nameInput = '#recipient-name';
    this.messageInput = '#message-text';
    this.sendButton = "button[onclick='send()']";
    this.closeButton = "button[data-dismiss='modal']";
  }

  async openContactModal() {
    await this.page.click(this.contactNav);
    await this.page.waitForSelector(this.contactModal, { state: 'visible' });
  }

  async fillContactForm(email, name, message) {
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.nameInput, name);
    await this.page.fill(this.messageInput, message);
  }

  async sendContactForm() {
    await this.page.click(this.sendButton);
  }

  async closeContactModal() {
    await this.page.click(this.closeButton);
  }
}