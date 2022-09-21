/* eslint-disable max-len */
import FavoriteMovieIdb from '../data/favorite-restaurant';

const LikeButtonInitiator = {
  async init({likeButton, movie}) {
    this._likeButton = likeButton;
    this._movie = movie;
    await this._renderButton();
  },

  async _renderButton() {
    const {id} = this._movie;
    if (await this._isMovieExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isMovieExist(id) {
    const movie = await FavoriteMovieIdb.getMovie(id);
    return !!movie;
  },

  _renderLike() {
    this._likeButton.addEventListener('click', async () => {
      this._likeButton.classList.add('like');
      await FavoriteMovieIdb.putMovie(this._movie);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButton.addEventListener('click', async () => {
      this._likeButton.classList.remove('like');
      await FavoriteMovieIdb.deleteMovie(this._movie.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
