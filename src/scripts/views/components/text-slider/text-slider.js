/* eslint-disable require-jsdoc */
import css from './text-slider.css';
import html from './text-slider-element';

class textSlider extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  };
  connectedCallback() {
    this.render();
  };

  render() {
    this.shadowDOM.innerHTML = `
        <style>
            ${css}
        </style>
            ${html()}
        `;
  };
};

customElements.define('text-slider', textSlider);
