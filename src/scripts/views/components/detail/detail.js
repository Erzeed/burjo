/* eslint-disable indent */
/* eslint-disable new-cap */
/* eslint-disable max-len */
import css from './detail.css';
import CONFIG from '../../../global/api-endpoint';

const detail = (data) => {
      return `
      <style>
      ${css}
      </style>
      <div class="detail__page">
        <div class="detail__page__restaurant">
            <div class="detail__page___img" id="likeButtonContainer">
                <img tabindex="0" src="${CONFIG.IMG_RESTAURANT(data.pictureId)}" alt="${data.name}" />
            </div>
            <div class="detail__page__desc">
                <div class="page__desc__title">
                    <h1 tabindex="0">${data.name}</h1>
                </div>
                <div class="detail__desc__rate__addres">
                    <div class="desc__rate">
                        <p tabindex="0">${data.rating}</p>
                    </div>
                    <div class="desc__addres">
                        <p tabindex="0">${data.city}</p>
                        <p tabindex="0">${data.address}</p>
                    </div>
                </div>
                <div class="page__desc__restaurant">
                    <p tabindex="0">${data.description}</p>
                </div>
                <div class="page__desc__category">
                   <p tabindex="0">Category :</p>
                </div>
            </div>
            <div class="detail__page__menu">
                <div class="page__menu__foods">
                    <h2 tabindex="0">Menu</h2>
                    <ol class="menu__foods__daftar"></ol>
                </div>
                <div class="page__menu__drink">
                    <h3 tabindex="0">Drink</h3>
                    <ol class="menu__foods__drink"></ol>
                </div>
            </div>
        </div>
        <div class="detail__page__review">
            <for-m></for-m>
            <div class="page__review__card"></div>
        </div>
      </div>
      `;
};

export default detail;
