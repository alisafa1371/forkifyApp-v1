import View from "./view.js";
import previewView from "./previewView.js";
import icons from "url:../../img/icons.svg";

class ResultView extends View {
  _parentEl = document.querySelector(".results");
  _errorMessage = "We could not find your search Pleas try again!";

  _generateMarkup() {
    const data = this._data;
    return data.map((result) => previewView.render(result, false)).join("");
  }
}
export default new ResultView();
