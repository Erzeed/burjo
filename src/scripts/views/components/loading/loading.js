/* eslint-disable require-jsdoc */
import css from './loading.css';
import html from './loading-element';

class loading extends HTMLElement {
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

customElements.define('load-ding', loading);
