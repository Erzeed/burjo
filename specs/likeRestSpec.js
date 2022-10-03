/* eslint-disable max-len */
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant';
import * as TestFactories from './helper/test-factory';


describe('Liking A restaurants', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurants has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurants({id: 1});

    expect(document.querySelector('.likebtn'))
        .toBeTruthy();
  });

  it('should not show the unlike button when the restaurants has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurants({id: 1});

    expect(document.querySelector('.likebtn like')).toBeFalsy();
  });

  it('should be able to like the restaurants', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurants({id: 1});

    document.querySelector('.likebtn').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantIdb.getRestaurants(1);

    expect(restaurant).toEqual({id: 1});

    FavoriteRestaurantIdb.deleteRestaurants(1);
  });

  it('should not add a restaurants again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurants({id: 1});

    // Tambahkan film dengan ID 1 ke daftar film yang disukai
    await FavoriteRestaurantIdb.putRestaurants({id: 1});
    // Simulasikan pengguna menekan tombol suka film
    document.querySelector('.likebtn').dispatchEvent(new Event('click'));
    // tidak ada film yang ganda
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{id: 1}]);

    FavoriteRestaurantIdb.deleteRestaurants(1);
  });

  it('should not add a restaurants when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurants({});

    document.querySelector('.likebtn').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
