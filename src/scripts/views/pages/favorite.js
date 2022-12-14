/* eslint-disable max-len */
import card from '../components/card/card-elemen.js';
import showHideLoading from '../../utils/show-hide-loading';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant';

const favorite = {
  async render() {
    return `
        <load-ding></load-ding>
        <section tabindex="0" id="content" class="favorite">
        <div class="restauran__title">
              <h1 tabindex="0">Favorite Restauran</h1>
          </div>
          <div class="favorite__container">
            <p class="restaurant__not__found" tabindex="0">Data Favorite Kosong</p>
          </div>
        </section> 
        <text-slider></text-slider>  
        `;
  },
  async afterRender() {
    const restaurantList = await FavoriteRestaurantIdb.getAllRestaurants();
    const cardContainer = document.querySelector('.favorite__container');
    const elemenDataKosong = document.querySelector('.favorite__container p');
    restaurantList.forEach((restaurants) => {
      elemenDataKosong.style.display = 'none';
      cardContainer.innerHTML += card(restaurants);
    });
    showHideLoading(restaurantList);
  },
};

export default favorite;
