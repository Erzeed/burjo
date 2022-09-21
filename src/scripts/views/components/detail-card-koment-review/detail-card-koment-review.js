import css from './detail-card-koment-review.css';

const cardReview = (data) => {
  return `
        <style>
            ${css}
        </style>
        <div class="preview__card__container">
            <div class="page__review__name">
                <p tabindex="0">${data.name}</p>
            </div>
            <div class="page__review__date">
                <p tabindex="0">${data.date}</p>
            </div>        
            <div class="page__review__desc">
                <p tabindex="0">${data.review}</p>
            </div>
        </div>
        `;
};

export default cardReview;
