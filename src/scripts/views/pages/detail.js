/* eslint-disable max-len */
import dataRestaurant from '../../data/data-restaurant';
import UrlParser from '../../routes/url-parser';
import detail from '../components/detail/detail';
import {onHandleForm, onHandleListFood} from '../../utils/handle-detail-dom';
import showHideLoading from '../../utils/show-hide-loading';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant';

const detailRestaurant = {
  async render() {
    return `
       <load-ding></load-ding>
        <section tabindex="0" id="content" class="detail__restauran">
          <div class="restauran__container"></div>
        </section> 
        <text-slider></text-slider>  
        `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantDetail = await dataRestaurant.detailRestaurant(url.id);
    const cardContainer = document.querySelector('.restauran__container');
    cardContainer.innerHTML = detail(restaurantDetail);
    showHideLoading(restaurantDetail);
    onHandleListFood(restaurantDetail);
    onHandleForm();
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurantDetail.id,
        pictureId: restaurantDetail.pictureId,
        name: restaurantDetail.name,
        description: restaurantDetail.description,
        rating: restaurantDetail.rating,
        city: restaurantDetail.city,
      },
    });
  },
};

export default detailRestaurant;
