/* eslint-disable new-cap */
/* eslint-disable max-len */
import CONFIG from '../../../global/api-endpoint';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import css from './card.css';

const card = (data) => {
  const sliceTxt = (text) => {
    return text.slice(0, 100) + '...';
  };

  return `
    <style>
    ${css}
    </style>
    <div class="restaurant__card">
        <div class="card__img">
            <img class="lazyload" tabindex="0" data-src="${CONFIG.IMG_RESTAURANT(data.pictureId)}" alt="restoran bernama${data.name}">
        </div>
        <div class="card__desc">
            <div class="card__name">
                <p tabindex="0"><a href="/#/detail/${data.id}">${data.name}</a></p>
            </div>
            <div class="card__desc__restauran">
                <p tabindex="0">${sliceTxt(data.description)}</p>
            </div>
            <div class="card__city__rating">
                <p tabindex="0">${data.city}</p>
                <p tabindex="0">${data.rating}</p>
            </div>
        </div>
    </div> 
    `;
};

export default card;
