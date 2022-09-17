/* eslint-disable require-jsdoc */
import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor(
      {button, drawer, content, iconBar}) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._iconBar = iconBar;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      iconBar: this._iconBar,
    });
  };

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    // asyncDom
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
