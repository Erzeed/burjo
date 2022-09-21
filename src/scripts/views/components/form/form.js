/* eslint-disable require-jsdoc */
import css from './form.css';
import html from './form-Element';

class form extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }
  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
            ${css}
        </style>
          ${html()}
    `;
  }
}


customElements.define('for-m', form);
