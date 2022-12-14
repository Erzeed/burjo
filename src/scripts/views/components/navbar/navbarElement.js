import logo from '../../../../public/images/logo.png';

const navbarElement = () => {
  const urlLogo = 'https://img.icons8.com/android/48/000000/menu.png';

  return `
    <nav>
        <div class="nav__logo">
        <img src='${logo}' alt='logo burjo'>
        </div>
        <button id="hamburgerButton" aria-label="button navigasi">
        <img class="open" src='${urlLogo}' alt="hamburger button">
        </button>
        <ul class="nav__list">
        <li class="nav__items" ><a href="/#/home">Home</a></li>
        <li class="nav__items" ><a href="/#/favorite">Favorite</a></li>
        <li class="nav__items" ><a href="https://github.com/erzeed" target="_blank">About Us</a></li>
        </ul>
    </nav>
    `;
};

export default navbarElement;
