/* eslint-disable max-len */

const footerElement = () => {
  const iconFb = 'https://img.icons8.com/cute-clipart/64/000000/facebook-new.png';
  const iconIg ='https://img.icons8.com/color/48/000000/instagram-new--v1.png';
  const iconTwitter = 'https://img.icons8.com/arcade/64/000000/experimental-twitter-arcade.png';
  const iconLinkediln = 'https://img.icons8.com/fluency/48/000000/linkedin.png';

  return `
    <Fragment>
    <div class="footer__logo">
        <h5 tabindex="0">Burjo</h5>
        <p tabindex="0">It's not just restaurant, It's an Experience</p>
    </div>
    <div class="footer__desc">
        <ul tabindex="0" class="footer__copyright">
            <li>© 2022 Burjo</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
        </ul>
        <ul class="footer__sosmed">
            <li tabindex="0"><img src="${iconFb}" alt="icon facebook"></li>
            <li tabindex="0"><img src="${iconIg}" alt="icon instagram"></li>
            <li tabindex="0"><img src="${iconTwitter}" alt="icon twitter"></li>
            <li tabindex="0"><img src="${iconLinkediln}" alt="icon linkedin"></li>
        </ul>
    </div>
    </Fragment>
    `;
};

export default footerElement;
