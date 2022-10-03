/* eslint-disable max-len */
import favoriteButton from '../views/components/like-button/likeBtn';

const LikeButtonInitiator = {
  async init({likeButtonContainer, favoriteRestaurants, restaurant}) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurants = favoriteRestaurants;

    await this._renderButton();
  },

  async _renderButton() {
    const {id} = this._restaurant;
    this._checkIsLiked(id);
    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _checkIsLiked(id) {
    this._likeButtonContainer.innerHTML = favoriteButton();
    const restaurantsList = await this._favoriteRestaurants.getAllRestaurants();
    const likeButton = document.querySelector('.likebtn');
    restaurantsList.forEach((data) => {
      if (data.id == id) {
        likeButton.classList.add('like');
      }
    });
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurants.getRestaurants(id);
    return !!restaurant;
  },

  _renderLike() {
    const likeButton = document.querySelector('.likebtn');
    likeButton.addEventListener('click', async () => {
      likeButton.classList.add('like');
      await this._favoriteRestaurants.putRestaurants(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    const unLikeButton = document.querySelector('.likebtn');
    unLikeButton.addEventListener('click', async () => {
      unLikeButton.classList.remove('like');
      await this._favoriteRestaurants.deleteRestaurants(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
