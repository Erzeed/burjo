/* eslint-disable max-len */
import CONFIG from './config.js';

const API_ENDPOINT = {
  LIST_RESTAURANT: `${CONFIG.BASE_URL}/list`,
  IMG_RESTAURANT: (pictureId) => `${CONFIG.BASE_URL}/images/medium/${pictureId}`,
  DETAIL_RESTAURANT: (Idrestaurant) => `${CONFIG.BASE_URL}/detail/${Idrestaurant}`,
  POST_REVIEW_RESTAURANT: `${CONFIG.BASE_URL}/review`,
};

export default API_ENDPOINT;
