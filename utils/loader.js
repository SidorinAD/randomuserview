import { LOADER, TABLEHEAD, TABLESEARCH } from "../const/const.js";

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
