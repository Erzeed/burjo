const openBarUrl = 'https://img.icons8.com/android/48/000000/menu.png';
const closeBarUrl = 'https://img.icons8.com/ios/50/000000/delete-sign--v2.png';

const DrawerInitiator = {
  init({button, drawer, content, iconBar}) {
    button.addEventListener('click', (event) => {
      if (iconBar.classList == 'open') {
        this._toggleDrawer(event, drawer, iconBar);
      } else {
        this._closeDrawer(event, drawer, iconBar);
      }
    });
    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, iconBar);
    });
  },

  _toggleDrawer(event, drawer, iconBar) {
    event.stopPropagation();
    this._changeNav('open', iconBar, drawer);
  },

  _closeDrawer(event, drawer, iconBar) {
    event.stopPropagation();
    this._changeNav('remove', iconBar, drawer);
  },

  _changeNav(action, iconBar, drawer) {
    if (action == 'open') {
      drawer.classList.add('active');
      iconBar.src = closeBarUrl;
      iconBar.alt = 'close button';
      iconBar.classList = 'close';
    } else if (action == 'remove') {
      iconBar.src = openBarUrl;
      iconBar.alt = 'open button';
      iconBar.classList = 'open';
      drawer.classList.remove('active');
    }
  },
};

export default DrawerInitiator;

