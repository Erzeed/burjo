import asyncDom from './template-element-loaded';

const LoadingInitiator = {
  async init({loading}) {
    asyncDom('.restaurant__card').then((element) => {
      this._showHideLoading(element, loading);
    });
    asyncDom('.restauran__container').then((element) => {
      this._showHideLoading(element, loading);
    });
  },
  _showHideLoading(element, loading) {
    if (element) {
      loading.style.display = 'none';
    } else {
      loading.style.display = 'flex';
    }
  },
};

export default LoadingInitiator;
