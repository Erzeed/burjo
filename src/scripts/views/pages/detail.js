/* eslint-disable max-len */
import dataRestaurant from '../../data/data-restaurant';
import UrlParser from '../../routes/url-parser';
import detail from '../components/detail/detail';
import {onHandleForm, onHandleListFood} from '../../utils/handle-detail-dom';
import showHideLoading from '../../utils/show-hide-loading';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteMovieIdb from '../../data/favorite-restaurant';

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
    const movieList = await FavoriteMovieIdb.getAllMovies();
    const movieDetail = await dataRestaurant.detailRestaurant(url.id);
    const cardContainer = document.querySelector('.restauran__container');
    cardContainer.innerHTML = detail(movieDetail);
    const likeBtnElemen = document.querySelector('.likebtn');
    movieList.forEach((data) => {
      if (data.id == movieDetail.id) {
        likeBtnElemen.classList.add('like');
      }
    });
    showHideLoading(movieDetail);
    onHandleListFood(movieDetail);
    onHandleForm();
    LikeButtonInitiator.init({
      likeButton: document.querySelector('.likebtn'),
      movie: {
        id: movieDetail.id,
        pictureId: movieDetail.pictureId,
        name: movieDetail.name,
        description: movieDetail.description,
        rating: movieDetail.rating,
        city: movieDetail.city,
      },
    });
  },
};

export default detailRestaurant;
