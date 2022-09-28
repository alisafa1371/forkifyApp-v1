import View from "./view.js";
import icons from "url:../../img/icons.svg";

class AddRecipeView extends View {
  _parentEl = document.querySelector(".upload");
  _window = document.querySelector(".add-recipe-window ");
  _overlay = document.querySelector(".overlay");
  _btnOpen = document.querySelector(".nav__btn--add-recipe");
  _btnClose = document.querySelector(".btn--close-modal");
  _succsessMessage = "Recipe was uploaded successfully";
  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerCloseWindow();
  }

  _toggleClass() {
    this._window.classList.toggle("hidden");
    this._overlay.classList.toggle("hidden");
  }
  _addHandlerShowWindow() {
    this._btnOpen.addEventListener("click", this._toggleClass.bind(this));
  }

  _addHandlerCloseWindow() {
    [this._btnClose, this._overlay].forEach((item) =>
      item.addEventListener("click", this._toggleClass.bind(this))
    );
  }

  addHandlerUpload(handler) {
    this._parentEl.addEventListener("submit", function (e) {
      e.preventDefault();
      const dataArray = [...new FormData(this)];
      const data = Object.fromEntries(dataArray);
      handler(data);
    });
  }

  _generateMarkup() {
    return `
   <div class="overlay hidden"></div>
  <div class="add-recipe-window hidden">
    <button class="btn--close-modal">&times;</button>
    <form class="upload">
      <div class="upload__column">
        <h3 class="upload__heading">Recipe data</h3>
        <label>Title</label>
        <input value="TEST123" required name="title" type="text" />
        <label>URL</label>
        <input value="TEST123" required name="sourceUrl" type="text" />
        <label>Image URL</label>
        <input value="TEST123" required name="image" type="text" />
        <label>Publisher</label>
        <input value="TEST123" required name="publisher" type="text" />
        <label>Prep time</label>
        <input value="23" required name="cookingTime" type="number" />
        <label>Servings</label>
        <input value="23" required name="servings" type="number" />
      </div>

      <div class="upload__column">
        <h3 class="upload__heading">Ingredients</h3>
        <label>Ingredient 1</label>
        <input value="0.5,kg,Rice" type="text" required name="ingredient-1"
          placeholder="Format: 'Quantity,Unit,Description'" />
        <label>Ingredient 2</label>
        <input value="1,,Avocado" type="text" name="ingredient-2" placeholder="Format: 'Quantity,Unit,Description'" />
        <label>Ingredient 3</label>
        <input value=",,salt" type="text" name="ingredient-3" placeholder="Format: 'Quantity,Unit,Description'" />
        <label>Ingredient 4</label>
        <input type="text" name="ingredient-4" placeholder="Format: 'Quantity,Unit,Description'" />
        <label>Ingredient 5</label>
        <input type="text" name="ingredient-5" placeholder="Format: 'Quantity,Unit,Description'" />
        <label>Ingredient 6</label>
        <input type="text" name="ingredient-6" placeholder="Format: 'Quantity,Unit,Description'" />
      </div>

      <button class="btn upload__btn">
        <svg>
          <use href="src/img/icons.svg#icon-upload-cloud"></use>
        </svg>
        <span>Upload</span>
      </button>
    </form>
  </div>
   `;
  }
}
export default new AddRecipeView();
