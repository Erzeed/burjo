import imgJumbotron from '../../../../public/images/heros/hero-image_2.jpg';

const jumbotron = () => {
  return `
    <div class="jumbotron">
        <div class="jumbotron__title">
            <h1 tabindex="0">Burjo</h1>
            <p tabindex="0">It's not just restaurant, It's an Experience</p>
        </div>
        <div class="jumbotron__img">
            <img src="${imgJumbotron}" alt="gambar jumbotron">
        </div>
    </div>  
    `;
};

export default jumbotron;
