class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML =
      /*html*/
      `
        <footer>
            <p>Footer</p>
            <p> 	&copy;victor code     </p>
        </footer>
        `;
  }
}
customElements.define("footer-component", FooterComponent);
