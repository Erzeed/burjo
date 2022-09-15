/* eslint-disable max-len */
import dataRestaurant from '../../data/data-restaurant';
import UrlParser from '../../routes/url-parser';
import detail from '../components/detail/detail';
import {onHandleForm, onHandleListFood} from '../../utils/detail-initiator';

const detailRestaurant = {
  async render() {
    return `
        <section class="detail__restauran">
          <div class="restauran__container"></div>
        </section> 
        <text-slider></text-slider>  
        `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movieDetail = await dataRestaurant.detailRestaurant(url.id);
    const cardContainer = document.querySelector('.restauran__container');
    cardContainer.innerHTML = detail(movieDetail);
    // const nameSelector = document.querySelector('form input');
    // const reviewSelector = document.querySelector('form textarea');
    // const btnForm = document.querySelector('.form__content__btn button');
    onHandleListFood(movieDetail);
    onHandleForm();
  },
};

export default detailRestaurant;
