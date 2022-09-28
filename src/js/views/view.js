import icons from "url:../../img/icons.svg";

export default class View {
  _data;
  /**
   *Render the recived object to the DOM
   * @param {object | object[]} data the Data to be rendered (e.g recipe)
   * @param {boolean} [render = true] If false , creat markup string insted of rendering to the dom
   * @returns {undefined | string} A markup string if render is false
   * @this {object} View instance
   */
  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;
    const markup = this._generateMarkup();

    if (!render) return markup;
    this._clean();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  update(data) {
    this._data = data;
    const newMarkup = this._generateMarkup();
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll("*"));
    const curElements = Array.from(this._parentEl.querySelectorAll("*"));
    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      // Update changed text
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ""
      ) {
        curEl.textContent = newEl.textContent;
      }
      // Update changed attributes
      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach((attr) => {
          curEl.setAttribute(attr.name, attr.value);
        });
      }
    });
  }

  _clean() {
    this._parentEl.innerHTML = "";
  }

  renderSpinner = function () {
    const markup = `
    <div class="spinner" style="text-align: center;grid-column:1/-1">
      <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div> 
    `;
    this._clean();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  };

  renderError(message = this._errorMessage) {
    const markup = `
    <div class="error">
      <div>
        <svg>
          <use href="${icons}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${message}</p>
    </div>`;
    this._clean();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }
  succsessMessage(message = this._succsessMessage) {
    const markup = `
    <div class="message" style="text-align: center;grid-column:1/-1">
      <div>
        <svg>
          <use href="${icons}#icon-smile"></use>
        </svg>
      </div>
      <p>${message}</p>
    </div>`;
    this._clean();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }
}
