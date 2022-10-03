/* eslint-disable max-len */
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant';
import * as TestFactories from './helper/test-factory';

describe('Unliking A restaurants', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantIdb.putRestaurants({id: 1});
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurants(1);
  });

  it('should display unlike widget when the restaurants has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurants({id: 1});

    expect(document.querySelector('.likebtn')).toBeTruthy();
  });

  it('should not display like widget when the restaurants has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurants({id: 1});

    expect(document.querySelector('.likebtn like')).toBeFalsy();
  });

  it('should be able to remove liked restaurants from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurants({id: 1});

    document.querySelector('.likebtn').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unliked restaurants is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurants({id: 1});

    // hapus dulu film dari daftar film yang disukai
    await FavoriteRestaurantIdb.deleteRestaurants(1);

    // kemudian, simulasikan pengguna menekan widget batal menyukai film
    document.querySelector('.likebtn').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
