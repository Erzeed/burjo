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
            <div class="detail__page___img">
                <img src="${CONFIG.IMG_RESTAURANT(data.pictureId)}" alt="${data.name}" />
            </div>
            <div class="detail__page__desc">
                <div class="page__desc__title">
                    <h1>${data.name}</h1>
                </div>
                <div class="detail__desc__rate__addres">
                    <div class="desc__rate">
                        <p>${data.rating}</p>
                    </div>
                    <div class="desc__addres">
                        <p>${data.city}</p>
                        <p>${data.address}</p>
                    </div>
                </div>
                <div class="page__desc__restaurant">
                    <p>${data.description}</p>
                </div>
                <div class="page__desc__category">
                   <p>Category :</p>
                </div>
            </div>
            <div class="detail__page__menu">
                <div class="page__menu__foods">
                    <h2>Menu</h2>
                    <ol class="menu__foods__daftar"></ol>
                </div>
                <div class="page__menu__drink">
                    <h3>Drink</h3>
                    <ol class="menu__foods__drink"></ol>
                </div>
            </div>
        </div>
        <div class="detail__page__review">
            <div class="page__review__form">
                <div class="review__form__title">
                    <h4>Review</h4>
                </div>
                <form action="#" class="review__form__content">
                    <input type="text" placeholder="Nama" id="txt___name" />
                    <textarea name="txt___area" id="txt___area" placeholder="Review" ></textarea>
                    <div class="form__content__btn">
                        <button type="button">Kirim</button>
                    </div>
                </form>
            </div>
            <div class="page__review__card"></div>
        </div>
      </div>
      `;
};

export default detail;
