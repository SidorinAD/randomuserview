/*
  getUserTableRow receive and render single userData
*/
export const getUserTableRow = ({
  fullName,
  thumbnail,
  picture,
  location,
  email,
  phone,
  registeredDate,
}) => {
  return `
          <tr>
            <td>${fullName}</td>
            <td class='table-image'><img src="${thumbnail}">
            <div class='tooltip'>
              <img class='tooltip-img' src="${picture}">
            </div>
            </td>
            <td>${location}</td>
            <td>${email}</td>
            <td>${phone}</td>
            <td>${registeredDate}</td>
          </tr>
          `;
};
