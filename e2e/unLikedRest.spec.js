/* eslint-disable new-cap */
Feature('Unliking Restaurant');

Before(({I}) => {
  I.amOnPage('/#/favorite');
});

Scenario('Unliking one restaurant', async ({I}) => {
  I.see('Data Favorite Kosong', '.restaurant__not__found');

  I.amOnPage('/#/home');

  I.seeElement('.card__name__title a');
  const firstRest = locate('.card__name__title a').first();
  I.click(firstRest);

  I.seeElement('.likebtn');
  I.wait(3);
  I.click('.likebtn');

  I.amOnPage('/#/favorite');
  I.seeElement('.card__name__title a');
  I.click(firstRest);

  I.seeElement('.like');
  I.click('.like');

  I.amOnPage('/#/favorite');
  I.see('Data Favorite Kosong', '.restaurant__not__found');
});
