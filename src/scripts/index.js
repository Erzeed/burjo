/* eslint-disable max-len */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import data from '../DATA.json';


const cardContainer = document.querySelector('.restauran__container');
const barButton = document.querySelector('nav button');
const iconBar = document.querySelector('nav button img');
const navBar = document.querySelector('nav .nav__list');
const main = document.querySelector('main');
const jumbotron = document.querySelector('.jumbotron');
const openBarUrl = 'https://img.icons8.com/external-febrian-hidayat-glyph-febrian-hidayat/24/000000/external-burger-bar-ui-essential-febrian-hidayat-glyph-febrian-hidayat.png';
const closeBarUrl = 'https://img.icons8.com/material-outlined/24/000000/delete-sign.png';
const {restaurants} = data;

const sliceTxt = (text) => {
  return text.slice(0, 100) + '...';
};

const changeNav = (action) => {
  if (action == 'open') {
    iconBar.src = closeBarUrl;
    iconBar.alt = 'close button';
    iconBar.classList = 'close';
    navBar.classList.add('active');
  } else if (action == 'remove') {
    iconBar.src = openBarUrl;
    iconBar.alt = 'open button';
    iconBar.classList = 'open';
    navBar.classList.remove('active');
  }
};

const card = (e) => {
  return `
    <div class="restaurant__card">
        <div class="card__img">
            <img tabindex="0" src="${e.pictureId}" alt="restoran bernama${e.name}">
        </div>
        <div class="card__desc">
            <div class="card__name">
                <p tabindex="0">${e.name}</p>
            </div>
            <div class="card__desc__restauran">
                <p tabindex="0">${sliceTxt(e.description)}</p>
            </div>
            <div class="card__city__rating">
                <p tabindex="0">${e.city}</p>
                <p tabindex="0">${e.rating}</p>
            </div>
        </div>
    </div> 
    `;
};

const openAndCloseBtn = (action) => {
  if (action == 'open') {
    changeNav('open');
  } else if (action == 'close') {
    changeNav('remove');
  }
};

barButton.addEventListener('click', (e) => {
  const nameClass = e.target.classList.value;
  openAndCloseBtn(nameClass);
});

barButton.addEventListener('keyup', (e) => {
  if (e.code == 'Enter') {
    const nameClass = e.target.firstElementChild.classList.value;
    openAndCloseBtn(nameClass);
  }
});

main.addEventListener('click', (_) => {
  changeNav('remove');
});

jumbotron.addEventListener('click', (_) => {
  changeNav('remove');
});


restaurants.forEach((e) => {
  cardContainer.innerHTML+= card(e);
});
