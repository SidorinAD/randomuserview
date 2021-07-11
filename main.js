import { TABLESEARCH } from "./const/const.js";
import { renderUsers } from "./utils/renderUsers.js";
import {debounce} from "./utils/debounce.js";
import { fetchData } from "./utils/fetch.js";
import { displayLoading, hideLoading } from "./utils/loader.js";

function onDocumentLoad() {
  displayLoading();
  fetchData()
    .then(loadedUsers => {
      let users = loadedUsers;
      renderUsers(users)
      hideLoading();
      TABLESEARCH.addEventListener("input", debounce((e) => {
        const searchQuery = e.target.value.toLowerCase();
        const filteredUsers = users.filter((user) =>
          user.fullName.toLowerCase().includes(searchQuery)
        );
        renderUsers(filteredUsers);
      }, 500));
    })
    .catch(() => {
      console.log("error");
    });
}


document.addEventListener("DOMContentLoaded", onDocumentLoad);

