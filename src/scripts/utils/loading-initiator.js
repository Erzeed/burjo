
const loadingInitiator = (data) => {
  const loading = document.querySelector('load-ding')
      .shadowRoot.querySelector('.page__loading');

  if (data) {
    loading.style.display = 'none';
  }
};

export default loadingInitiator;
