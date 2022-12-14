/* eslint-disable require-jsdoc */
import css from './navbar.css';
import html from './navbarElement.js';

class navbar extends HTMLElement {
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


customElements.define('nav-bar', navbar);
