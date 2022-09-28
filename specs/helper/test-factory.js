import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import FavoriteMovieIdb from '../../src/scripts/data/favorite-restaurant';

const createLikeButtonPresenterWithMovie = async (movie) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteMovies: FavoriteMovieIdb,
    movie,
  });
};

export {createLikeButtonPresenterWithMovie};
