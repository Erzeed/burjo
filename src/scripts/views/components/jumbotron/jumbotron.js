/* eslint-disable require-jsdoc */
import css from './jumbotron.css';
import html from './jumbotronElement';

class jumbotron extends HTMLElement {
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

customElements.define('jumbo-tron', jumbotron);
