import { async } from "regenerator-runtime";
import { API_URL } from "./config.js";
import { API_KEY } from "./config.js";
import { PAGE_LOAD_AMOUNT } from "./config.js";
import { AJAX } from "./helper.js";

export const state = {
  recipe: {},
  search: {
    query: "",
    result: [],
    page: 1,
  },
  bookmarks: [],
};

/**
 * Creat Recipe object
 * @param {object} data  Fulfillment value of a ajax call contains recipe
 * @returns {object} Modified Recipe object
 */
const createRecipeObject = function (data) {
  const { recipe } = data.data;
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    ...(recipe.key && { key: API_KEY }),
  };
};

/**
 * 1)Getting recipe data with an ajax request  2)Creat modified recipe and store it in state.recipe 3)
 * @param {string} id The hash of window (e.g 6331fdd69e13ee0016fdb20d)
 */

export const loadRecipe = async function (id) {
  try {
    // recipe data
    const data = await AJAX(`${API_URL}${id}?key=${API_KEY}`);
    // making recipe object in state object by data from api
    state.recipe = createRecipeObject(data);

    if (state.bookmarks.some((bookmark) => bookmark.id === id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;
  } catch (err) {
    throw err;
  }
};

/**
 * 1)Getting data with the query that is searched 2) Creat search result modified object 3) Reset pagination page to page 1 after new search
 * @param {string} query The term that is searched in input search
 */

export const loadSearchResult = async function (query) {
  try {
    state.search.query = query;
    const { data } = await AJAX(`${API_URL}?search=${query}&key=${API_KEY}`);

    state.search.result = data.recipes.map((rec) => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
        ...(rec.key && { key: API_KEY }),
      };
    });
    // reset to page 1 after new search
    state.search.page = 1;
  } catch (err) {
    throw err;
  }
};

/**
 * Slice search result array
 * @param {number} page
 * @returns {Array} An sliced array for every search result page
 */
export const searchResultsPage = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * PAGE_LOAD_AMOUNT;
  const end = page * PAGE_LOAD_AMOUNT;
  return state.search.result.slice(start, end);
};

/**
 * 1)Changing ingridents quantity by changing servings number 2)Update servings number in recipe object
 * @param {number} newServings New number of servings
 */

export const updateServings = function (newServings) {
  // changing ingredients quantities
  // newQt = oldQt * newServings / oldServings
  state.recipe.ingredients.forEach(
    (ing) =>
      (ing.quantity = ing.quantity * (newServings / state.recipe.servings))
  );
  // updating old servings
  state.recipe.servings = newServings;
};

/**
 * Saving bookmarks array in local storage
 */

const bookmarkLocalStorage = function () {
  localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
};

/**
 * 1) Push recipe object to bookmarks array 2)
 * @param {object} recipe Recipe Object
 */

export const addBookmark = function (recipe) {
  // add bookmark
  state.bookmarks.push(recipe);
  // mark current recipe as bookmark
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
  // localstorage
  bookmarkLocalStorage();
};

export const removeBookmark = function (id) {
  // remove bookmark
  const index = state.bookmarks.findIndex((el) => el.id === id);
  state.bookmarks.splice(index, 1);
  // mark current recipe as not bookmark
  if (id === state.recipe.id) state.recipe.bookmarked = false;
  // localstorage
  bookmarkLocalStorage();
};

export const uploadRecipe = async function (newRecipe) {
  try {
    const ingredients = Object.entries(newRecipe)
      .filter((entry) => entry[0].startsWith("ingredient") && entry[1] !== "")
      .map((ing) => {
        const ingArr = ing[1].split(",").map((el) => el.trim());
        if (ingArr.length !== 3)
          throw new Error(
            "Wrong ingredients format! Please use this format : (quantity,unit,description)"
          );
        const [quantity, unit, description] = ingArr;
        return { quantity: quantity ? +quantity : null, unit, description };
      });
    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients,
    };
    const data = await AJAX(`${API_URL}?key=${API_KEY}`, recipe);
    state.recipe = createRecipeObject(data);
    addBookmark(state.recipe);
  } catch (err) {
    throw err;
  }
};

// initialization

(function () {
  const storage = localStorage.getItem("bookmarks");
  if (storage) state.bookmarks = JSON.parse(storage);
})();
