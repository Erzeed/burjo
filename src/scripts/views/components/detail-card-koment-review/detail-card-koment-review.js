import css from './detail-card-koment-review.css';

const cardReview = (data) => {
  return `
        <style>
            ${css}
        </style>
        <div class="preview__card__container">
            <div class="page__review__name">
                <p>${data.name}</p>
            </div>
            <div class="page__review__date">
                <p>${data.date}</p>
            </div>        
            <div class="page__review__desc">
                <p>${data.review}</p>
            </div>
        </div>
        `;
};

export default cardReview;
