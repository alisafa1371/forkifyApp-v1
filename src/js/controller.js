///////////////////////////////////////
// API doc link
// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
import * as model from "./model.js";
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";
import resultView from "./views/resultView.js";
import paginationView from "./views/paginationView.js";
import bookmarksView from "./views/bookmarksView.js";
import addRecipeView from "./views/addRecipeView.js";
import "core-js/stable";
import "regenerator-runtime/runtime";
import { async } from "regenerator-runtime";
import { CLOSE_MODAL_SEC } from "./config.js";

// if (module.hot) {
//   module.hot.accept();
// }

export const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();

    // 0) update resultView and bookmarkView to mark selected result
    resultView.update(model.searchResultsPage());
    bookmarksView.update(model.state.bookmarks);
    // 1) loading recipe
    await model.loadRecipe(id);
    // 2) rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSreach = async function () {
  try {
    resultView.renderSpinner();
    // 1) get search query
    const query = searchView.getQuery();
    if (!query) return;
    // 2) get data from API
    await model.loadSearchResult(query);
    // 3) Rendering Recipe
    resultView.render(model.searchResultsPage());
    // 4) Rendering pagination
    paginationView.render(model.state.search);
  } catch (er) {
    // resultView.renderError();
  }
};

const controlPagination = function (goTOPage) {
  // 1) Rendering new result
  resultView.render(model.searchResultsPage(goTOPage));
  // 2) Rendering new pagination button
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  //1) update the recipe servings (in state)
  model.updateServings(newServings);
  //2) re-render recipeView
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // 1) add/remove bookmark
  !model.state.recipe.bookmarked
    ? model.addBookmark(model.state.recipe)
    : model.removeBookmark(model.state.recipe.id);
  // 2) update recipe view
  recipeView.update(model.state.recipe);
  // 3) render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlUploadRecipe = async function (newRecipe) {
  try {
    // 1) render spiner
    addRecipeView.renderSpinner();
    // 2) upload recipe
    await model.uploadRecipe(newRecipe);
    // 3) rendering uploaded recipe
    recipeView.render(model.state.recipe);
    // 4) render succsess message
    addRecipeView.succsessMessage();
    // 5) render bookmark view
    bookmarksView.render(model.state.bookmarks);
    // 6) change ID in URL
    window.history.pushState(null, "", `#${model.state.recipe.id}`);
    // 7) closing modal
    setTimeout(function () {
      addRecipeView._toggleClass();
    }, CLOSE_MODAL_SEC * 1000);
    // ) re-craete upload form
    // addRecipeView.render(moda);
  } catch (err) {
    addRecipeView.renderError(err);
  }
};

// initialization
(function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerServings(controlServings);
  recipeView.addHandlerBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSreach);
  paginationView.addHandlerPagination(controlPagination);
  addRecipeView.addHandlerUpload(controlUploadRecipe);
})();
