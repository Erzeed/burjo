/* eslint-disable max-len */
import './views/components/navbar/navbar';
import './views/components/jumbotron/jumbotron';
import './views/components/footer/footer';
import './views/components/text-slider/text-slider';
import './views/components/loading/loading';
import './data/data-restaurant';
import App from './views/app';


const app = new App({
  drawer: document.querySelector('nav-bar').shadowRoot.querySelector('nav .nav__list'),
  iconBar: document.querySelector('nav-bar').shadowRoot.querySelector('nav button img'),
  button: document.querySelector('nav-bar').shadowRoot.querySelector('#hamburgerButton'),
  loading: document.querySelector('load-ding').shadowRoot.querySelector('.page__loading'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});


window.addEventListener('load', async () => {
  app.renderPage();
  // await swRegister();
  // WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);

  // FooterToolsInitiator.init({
  //   subscribeButton: document.querySelector('#subscribePushNotification'),
  //   unsubscribeButton: document.querySelector('#unsubscribePushNotification'),
  // });
});

export default app;


