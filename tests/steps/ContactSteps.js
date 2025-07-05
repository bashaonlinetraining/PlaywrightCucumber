import { When, Then } from '@cucumber/cucumber';
import ContactPage from '../../pages/ContactPage.js';
import { loginSteps } from './LoginSteps.js';

let contactPage;

When('the user opens the contact form', async function () {
  contactPage = new ContactPage(loginSteps.page);
  await contactPage.openContactModal();
});

When('fills the contact form with {string}, {string}, and {string}', async function (email, name, message) {
  await contactPage.fillContactForm(email, name, message);
});

When('submits the contact form', async function () {
  await contactPage.sendContactForm();
});

Then('the contact form should be sent successfully', async function () {
  const dialogPromise = new Promise(resolve => {
    loginSteps.page.once('dialog', async dialog => {
      await dialog.accept();
      resolve(dialog.message());
    });
  });
  const message = await dialogPromise;
  // Optionally check the message
  // expect(message).toContain('Thanks for the message!!');
});
