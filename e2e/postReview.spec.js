/* eslint-disable new-cap */
const puppeteer = require('puppeteer');
const {QueryHandler} = require('query-selector-shadow-dom/plugins/puppeteer');

Feature('Post Review');

puppeteer.registerCustomQueryHandler('shadow', QueryHandler);

Before(({I}) => {
  I.amOnPage('/#/home');
});

Scenario('Post Review', async ({I}) => {
  I.seeElement('.card__name__title a');
  const firstRest = locate('.card__name__title a').first();
  I.click(firstRest);

  const input = `shadow/.review__form__content input`;
  const textarea = `shadow/.review__form__content textarea`;
  const button = `shadow/.review__form__content button`;

  I.seeElement(input);
  I.click(input);
  I.fillField(input, 'Test');

  I.seeElement(textarea);
  I.click(textarea);
  I.fillField(textarea, 'coba 2');

  I.seeElement(button);
  I.click(button);

  I.wait(1);
  I.see('Post Succesfull', '.swal2-title');
});
