import { TABLESEARCH } from "./const/const.js";
import { renderUsers } from "./utils/renderUsers.js";
import { debounce } from "./utils/debounce.js";
import { fetchData } from "./utils/fetch.js";
import { displayLoading, hideLoading } from "./utils/loader.js";

/*
Main function 
*/
function onDocumentLoad() {
  //display loader while data fetching
  displayLoading();
  // fetching data from API
  fetchData()
    .then((loadedUsers) => {
      // reassign data from fetch
      let users = loadedUsers;
      // pass data to render components
      renderUsers(users);
      // hide loader
      hideLoading();
      // add event listener to search input with debounce function
      TABLESEARCH.addEventListener(
        "input",
        debounce((e) => {
          const searchQuery = e.target.value.toLowerCase();
          const filteredUsers = users.filter((user) =>
            user.fullName.toLowerCase().includes(searchQuery)
          );
          renderUsers(filteredUsers);
        }, 500)
      );
    })
    // error handling
    .catch(() => {
      console.log("error");
    });
}

// to prevent errors we wait all DOM content loading, then start up Main function
document.addEventListener("DOMContentLoaded", onDocumentLoad);
