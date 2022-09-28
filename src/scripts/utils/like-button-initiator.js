/* eslint-disable max-len */
import FavoriteMovieIdb from '../data/favorite-restaurant';
import favoriteButton from '../views/components/like-button/likeBtn';

const LikeButtonInitiator = {
  async init({likeButtonContainer, movie}) {
    this._likeButtonContainer = likeButtonContainer;
    this._movie = movie;

    await this._renderButton();
  },

  async _renderButton() {
    const {id} = this._movie;
    this._checkIsLiked(id);
    if (await this._isMovieExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _checkIsLiked(id) {
    this._likeButtonContainer.innerHTML += favoriteButton();
    const movieList = await FavoriteMovieIdb.getAllMovies();
    const likeButton = document.querySelector('.likebtn');
    movieList.forEach((data) => {
      if (data.id == id) {
        likeButton.classList.add('like');
      }
    });
  },

  async _isMovieExist(id) {
    const movie = await FavoriteMovieIdb.getMovie(id);
    return !!movie;
  },

  _renderLike() {
    const likeButton = document.querySelector('.likebtn');
    likeButton.addEventListener('click', async () => {
      likeButton.classList.add('like');
      await FavoriteMovieIdb.putMovie(this._movie);
      this._renderButton();
    });
  },

  _renderLiked() {
    const unLikeButton = document.querySelector('.likebtn');
    unLikeButton.addEventListener('click', async () => {
      unLikeButton.classList.remove('like');
      await FavoriteMovieIdb.deleteMovie(this._movie.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
