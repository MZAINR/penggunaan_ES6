class ImageFigure extends HTMLElement {
  connectedCallback() {
    this.src = this.getAttribute('src') || null;
    this.alt = this.getAttribute('alt') || null;
    this.width = this.getAttribute('width') || null
    this.caption = this.getAttribute('caption') || null;
    this.render();
  }

render() {
  this.innerHTML = `
  <figure>
    <img src='${this.src}' alt='${this.alt}' width='${this.width}'>
    <figcaption>${this.caption}</figcaption>
  </figure>
`;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
    this.render();
  }

  static get observedAttributes() {
    return['caption'];
  }
}

customElements.define('image-figure', ImageFigure);