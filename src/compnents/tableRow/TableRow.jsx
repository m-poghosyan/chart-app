import React from "react";

const TableRow = ({ tableData, optionsButton, rowColors }) => {
  return (
    <>
      {tableData.map(({ name, date, phone, location }, index) => (
        <tr
          style={{ backgroundColor: rowColors?.length ? rowColors[index] : "" }}
        >
          <td className="rowName">{name}</td>
          <td>{date}</td>
          <td>{phone}</td>
          <td>{location}</td>
          <td>
            {optionsButton ? <button>Options</button> : null}
            <button className="detailButton">Details</button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default TableRow;
