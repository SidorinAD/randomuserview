import { getUserTableRow } from "../templates/getUserTableRow.js";
import { TABLEDATA } from "../const/const.js";

/*
that function process data from Api and pass it to template functuion to render, 
or return no results boilerplate if empty array received 
*/
export const renderUsers = (arr) => {
  if (arr.length === 0) {
    const noResultOutput = `
    <tr>
      <p>No results</p>
    </tr>
  `;
    TABLEDATA.innerHTML = noResultOutput;
  } else {
    const initialValue = " ";
    const tableRows = arr.reduce(
      (acc, rowData) => acc + getUserTableRow(rowData),
      initialValue
    );
    TABLEDATA.innerHTML = tableRows;
  }
};
