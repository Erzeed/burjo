/* eslint-disable max-len */
import dataRestaurant from '../data/data-restaurant';
import UrlParser from '../routes/url-parser';
import detailCategory from '../views/components/detail-category/detail-category';
import daftarMenu from '../views/components/detail-daftar-menu/detail-daftar-menu';
import cardReview from '../views/components/detail-card-koment-review/detail-card-koment-review';
import asyncDom from './template-element-loaded';

const data = {
  id: '',
  name: '',
  review: '',
};

export const onHandleListFood = async (movieDetail) => {
  const {categories, menus, customerReviews} = movieDetail;
  const {foods, drinks} = menus;

  categories.forEach((data) => {
    asyncDom('.page__desc__category').then((element) => {
      element.innerHTML += detailCategory(data.name);
    });
  });
  foods.forEach((data) => {
    asyncDom('.menu__foods__daftar').then((element) => {
      element.innerHTML += daftarMenu(data.name);
    });
  });
  drinks.forEach((data) => {
    asyncDom('.menu__foods__drink').then((element) => {
      element.innerHTML += daftarMenu(data.name);
    });
  });
  customerReviews.forEach((data) => {
    asyncDom('.page__review__card').then((element) => {
      element.innerHTML += cardReview(data);
    });
  });
};


export const onHandleForm = () => {
  asyncDom('form input').then((element) => {
    element.addEventListener('change', (e) => {
      data.name = e.target.value;
    });
  });
  asyncDom('form textarea').then((element) => {
    element.addEventListener('change', (e) => {
      data.review = e.target.value;
    });
  });
  asyncDom('.form__content__btn button').then((element) => {
    element.addEventListener('click', (_) => {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      data.id = url.id;
      dataRestaurant.postDataReview(data);
    });
  });
};

