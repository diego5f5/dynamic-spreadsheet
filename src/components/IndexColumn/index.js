import React, { useState, useEffect } from "react";

// Libraries
import { connect } from "react-redux";

// Styles
import { ColumnContainer, RowContainer } from "./styles";

// Component to manipulate the indexes responsible for numbering the rows
const IndexColumn = ({ totalRows }) => {
  const [rowsArray, setRowsArray] = useState([]);

  // Whenever the total number of rows in the spreadsheet changes, then the side column of indexes will also be updated
  useEffect(() => {
    const auxArray = [];
    for (let i = 1; i <= totalRows; i++) {
      auxArray.push(i);
    }
    setRowsArray(auxArray);
  }, [totalRows]);

  return (
    <ColumnContainer>
      <RowContainer />
      {rowsArray &&
        rowsArray.map((IndexRow) => (
          <RowContainer key={IndexRow}>{IndexRow}</RowContainer>
        ))}
    </ColumnContainer>
  );
};

export default connect((state) => ({ totalRows: state.totalRows }))(
  IndexColumn
);
