import dataRestaurant from '../../data/data-restaurant';
import card from '../components/card/card-elemen.js';
import loadingInitiator from '../../utils/loading-initiator';

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
    const movieList = await dataRestaurant.listRestaurant();
    const cardContainer = document.querySelector('.restauran__container');
    movieList.forEach((movie) => {
      cardContainer.innerHTML += card(movie);
    });
    loadingInitiator(movieList);
  },
};

export default home;
