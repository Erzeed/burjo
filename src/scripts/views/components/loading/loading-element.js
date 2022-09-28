/* eslint-disable max-len */
import icon from '../../../../public/images/logo.png';

const loadingElement = () => {
  return `
    <div class="page__loading">
        <div class="page__loading__main">
            <div class="loading__main__img">
            <img src="${icon}" alt="icon" />
            </div>
            <div class="loading__main__gif">
                <video autoplay loop playsinline>
                    <source src="./loading.webm" type="video/webm">
                    <source src="./loading.mp4" type="video/mp4">
                </video>
            </div>  
        </div>
    </div>  
    `;
};

export default loadingElement;
