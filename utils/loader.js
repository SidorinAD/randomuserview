import { LOADER, TABLEHEAD, TABLESEARCH } from "../const/const.js";

/*
  functions to hide or display different elements of main page in process of downloading data from API

*/
const setLoaderVisibility = (isVisible) =>
  (LOADER.style.visibility = isVisible ? "visible" : "hidden");
const setTableSearchVisibility = (isVisible) =>
  (TABLESEARCH.style.visibility = isVisible ? "visible" : "hidden");
const setTableHeadVisibility = (isVisible) =>
  (TABLEHEAD.style.visibility = isVisible ? "visible" : "hidden");

export const displayLoading = function () {
  setTableSearchVisibility(false);
  setLoaderVisibility(true);
  setTableHeadVisibility(false);
};

export const hideLoading = function () {
  setTableSearchVisibility(true);
  setLoaderVisibility(false);
  setTableHeadVisibility(true);
};
