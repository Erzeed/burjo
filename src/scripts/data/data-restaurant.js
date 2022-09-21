/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
import API_ENDPOINT from '../global/api-endpoint';
import axios from 'axios';
import {succes, error} from '../utils/custom-toast';

class dataRestaurant {
  static async listRestaurant() {
    return new Promise((resolve, reject) => {
      axios.get(API_ENDPOINT.LIST_RESTAURANT)
          .then((response) => {
            const {data} = response;
            resolve(data.restaurants);
          }).catch((err) => reject(err));
    });
  }
  static async imgRestaurant() {
    return new Promise((resolve, reject) => {
      axios.get(API_ENDPOINT.LIST_IMG_RESTAURANT)
          .then((response) => {
            const {data} = response;
            resolve(data.results);
          }).catch((err) => reject(err));
    });
  }
  static async detailRestaurant(id) {
    return new Promise((resolve, reject) => {
      axios.get(API_ENDPOINT.DETAIL_RESTAURANT(id))
          .then((response) => {
            const {data} = response;
            resolve(data.restaurant);
          }).catch((err) => reject(err));
    });
  }
  static async postDataReview(data) {
    const header = {'Content-Type': 'application/json'};
    axios.post(API_ENDPOINT.POST_REVIEW_RESTAURANT, data, {header})
        .then(() => {
          succes();
          setTimeout(() => {
            window.location.reload(true);
          }, 2000);
        })
        .catch((err) => error(err.response.data.message));
  }
}

export default dataRestaurant;
