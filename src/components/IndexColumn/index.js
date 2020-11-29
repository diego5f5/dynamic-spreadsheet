import React, { useState, useEffect } from "react";

// Libraries
import { connect } from "react-redux";

// Styles
import { ColumnContainer, RowContainer } from "./styles";

const IndexColumn = ({ totalRows }) => {
  const [rowsArray, setRowsArray] = useState([]);

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
