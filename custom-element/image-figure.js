class ImageFigure extends HTMLElement {
  connectedCallback() {
    this.src = this.getAttribute('src') || null;
    this.alt = this.getAttribute('alt') || null;
    this.width = this.getAttribute('width') || null
    this.caption = this.getAttribute('caption') || null;

    this.innerHTML = `
      <figure>
        <img src='${this.src}' alt='${this.alt}' width='${this.width}'>
        <figcaption>${this.caption}</figcaption>
      </figure>
    `
  }
}

customElements.define('image-figure', ImageFigure);