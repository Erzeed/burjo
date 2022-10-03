/* eslint-disable new-cap */
const assert = require('assert');

Feature('Liking Rest');

Before(({I}) => {
  I.amOnPage('/#/favorite');
});

Scenario('liking one movie', async ({I}) => {
  I.see('Data Favorite Kosong', '.restaurant__not__found');
  I.amOnPage('/#/home');

  I.seeElement('.card__name__title a');
  const firstRest = locate('.card__name__title a').first();
  const firstRestTitle = await I.grabTextFrom(firstRest);
  I.click(firstRest);
  // I.click(locate('.card__name__title a').first());

  I.seeElement('.likebtn');
  I.wait(3);
  I.click('.likebtn');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant__card');
  const likedRestTitle = await I.grabTextFrom('.card__name__title');
  assert.strictEqual(firstRestTitle, likedRestTitle);
});
