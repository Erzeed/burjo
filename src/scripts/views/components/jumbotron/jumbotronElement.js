/* eslint-disable max-len */
const jumbotron = () => {
  return `
    <div class="jumbotron">
        <div class="jumbotron__title">
            <h1 tabindex="0">Burjo</h1>
            <p tabindex="0">It's not just restaurant, It's an Experience</p>
        </div>
        <div class="jumbotron__img">
            <picture>
                <source media="(max-width: 600px)" srcset="./images/hero/hero-image_2-small.jpg">
                <img src='./images/hero/hero-image_2-large.jpg'  alt="jumbotron">
            </picture>
        </div>
    </div>  
    `;
};

export default jumbotron;
