/* eslint-disable max-len */
const form = () => {
  return `
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
      `;
};

export default form;
