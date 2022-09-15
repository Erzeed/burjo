/* eslint-disable require-jsdoc */
import css from './footer.css';
import html from './footer-element.js';

class footer extends HTMLElement {
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

customElements.define('footer-element', footer);
