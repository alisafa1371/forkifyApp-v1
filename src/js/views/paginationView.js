import View from "./view.js";
import icons from "url:../../img/icons.svg";
import { PAGE_LOAD_AMOUNT } from "../config.js";

class PaginationView extends View {
  _parentEl = document.querySelector(".pagination");
  _currentPage;

  _generateMarkup() {
    const numPages = Math.ceil(this._data.result.length / PAGE_LOAD_AMOUNT);
    this._currentPage = this._data.page;
    // page 1 , and there are other pages
    if (this._currentPage === 1 && numPages > 1) return this._nextBtn();
    // last page
    if (this._currentPage === numPages && numPages > 1) return this._prevBtn();
    // other pages
    if (this._currentPage < numPages) return this._nextBtn() + this._prevBtn();
    // page 1 , and there are NO other pages
    return "";
  }
  _nextBtn() {
    return `
    <button data-goto ="${
      this._currentPage + 1
    }" class="btn--inline pagination__btn--next">
      <span>Page ${this._currentPage + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button> 
    `;
  }
  _prevBtn() {
    return `
    <button data-goto ="${
      this._currentPage - 1
    }" class="btn--inline pagination__btn--prev">
      <span>Page ${this._currentPage - 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
    </button> 
    `;
  }
  // publisher function
  addHandlerPagination(handler) {
    this._parentEl.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--inline ");
      if (!btn) return;
      const goTOPage = +btn.dataset.goto;
      handler(goTOPage);
    });
  }
}

export default new PaginationView();
