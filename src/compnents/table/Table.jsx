import React from "react";
import TableRow from "../tableRow/TableRow";
import "./table.scss";

const Table = ({ rowColors, tableData, optionsButton }) => {
  return (
    <table className="tableContent">
      <thead>
        <tr>
          <th>Name</th>
          <th>Joined</th>
          <th>Location</th>
          <th>Phone Number</th>
          <th>Settings</th>
        </tr>
      </thead>
      <tbody>
        <TableRow
          optionsButton={optionsButton}
          rowColors={rowColors}
          tableData={tableData}
        />
      </tbody>
    </table>
  );
};

export default Table;
