import { getUserTableRow } from "../templates/getUserTableRow.js";
import { TABLEDATA } from "../const/const.js";

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
