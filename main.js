const loader = document.querySelector(".loader");
const tableHead = document.querySelector(".table-head");
const tableSearch = document.querySelector("#search");
let users = [];


const displayLoading = function () {
  tableSearch.style.visibility = "hidden";
  loader.style.visibility = "visible";
  tableHead.style.visibility = "hidden";
  setTimeout(() => {
    loader.style.visibility = "hidden";
    tableHead.style.visibility = "visible";
  }, 5000);
};

const hideLoading = function () {
  tableSearch.style.visibility = "visible";
  loader.style.visibility = "hidden";
  tableHead.style.visibility = "visible";
};

const getData = () => {
  displayLoading();
  fetch("https://randomuser.me/api/?results=15")
    .then((res) => {
      res
        .json()
        .then((res) => {
          hideLoading();
          users = res.results;
          showUsers(users);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

const showUsers = (arr) => {
  let output = "";
  console.log(arr.length);
  if (arr.length == 0) {
    output += `
      <tr>
        <p>No results</p>
      </tr>
    `;
  } else
    arr.forEach(function (user) {
      output += `
          <tr>
              <td>${user.name.first + " " + user.name.last}</td>
              <td class='table-image'><img src="${
                user.picture.thumbnail
              }"><div class='tooltip'><img class='tooltip-img' src="${
        user.picture.large
      }"></div></td>
              <td>${user.location.state + " " + user.location.city}</td>
              <td>${user.email}</td>
              <td>${user.phone}</td>
              <td>${user.dob.date
                .slice(0, 10)
                .split("-")
                .reverse()
                .join("/")}</td>
          </tr>
          `;
    });
  document.getElementById("table-data").innerHTML = output;
};

document.addEventListener("DOMContentLoaded", getData);

tableSearch.addEventListener("input", (e) => {
  const element = e.target.value.toLowerCase();
  const newUser = users.filter((user) =>
    user.name.first.toLowerCase().includes(element)
  );
  showUsers(newUser);
});
