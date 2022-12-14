const asyncDom = async (selector) => {
  while ( document.querySelector(selector) === null) {
    await new Promise( (resolve) => requestAnimationFrame(resolve) );
  }
  return document.querySelector(selector);
};

export default asyncDom;
