import dataRestaurant from '../../data/data-restaurant';
import card from '../components/card/card-elemen.js';
import showHideLoading from '../../utils/show-hide-loading';

const home = {
  async render() {
    return `
        <jumbo-tron></jumbo-tron>
        <load-ding></load-ding>
        <section id="content" class="restauran">
          <div class="restauran__title">
              <h2 tabindex="0">Explore Restauran</h2>
          </div>
          <div class="restauran__container"></div>
        </section> 
        <text-slider></text-slider>  
        `;
  },
  async afterRender() {
    const restaurantList = await dataRestaurant.listRestaurant();
    const cardContainer = document.querySelector('.restauran__container');
    restaurantList.forEach((restaurants) => {
      cardContainer.innerHTML += card(restaurants);
    });
    showHideLoading(restaurantList);
  },
};

export default home;
