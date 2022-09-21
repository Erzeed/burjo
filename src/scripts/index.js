/* eslint-disable max-len */
import './views/components/navbar/navbar';
import './views/components/jumbotron/jumbotron';
import './views/components/footer/footer';
import './views/components/text-slider/text-slider';
import './views/components/loading/loading';
import './views/components/form/form';
import './data/data-restaurant';
import swRegister from './utils/sw-register';
import App from './views/app';


const app = new App({
  drawer: document.querySelector('nav-bar').shadowRoot.querySelector('nav .nav__list'),
  iconBar: document.querySelector('nav-bar').shadowRoot.querySelector('nav button img'),
  button: document.querySelector('nav-bar').shadowRoot.querySelector('#hamburgerButton'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});


window.addEventListener('load', async () => {
  app.renderPage();
  await swRegister();
});

export default app;


