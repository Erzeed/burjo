
import iconLike from '../../../../public/images/icons8-like.png';

const favoriteButton = () => {
  return `
      <style>
      button {
        position: absolute;
        height: 45px;
        width: 45px;
        bottom: 20px;
        right: 10px;
        cursor: pointer;
        border-radius: 50%;
        }

        button.like {
            background-color:#53AD27;
        }
        button > img {
            height: 50%;
            width: 50%;
            object-fit: fill;
        }
      </style>
        <button class="likebtn">
            <img src="${iconLike}" alt="button like" />
        </button>
      `;
};

export default favoriteButton;
