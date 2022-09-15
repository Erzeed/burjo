import icon from '../../../../public/images/logo.png';
import loading from '../../../../public/loading.gif';

const loadingElement = () => {
  return `
    <div class="page__loading">
        <div class="page__loading__main">
            <div class="loading__main__img">
                <img src="${icon}" alt="icon" />
            </div>
            <div class="loading__main__gif">
                <img src="${loading}" alt="loading.." />
            </div>
        </div>
    </div>  
    `;
};

export default loadingElement;
