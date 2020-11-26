import React, { useEffect, useState } from "react";

// Styles
import { ColumnContainer, RowContainer } from "./styles";

export default function IndexColumn({ totalRows }) {
  const [rowsArray, setRowsArray] = useState([]);

  useEffect(() => {
    let auxArray = [];
    for (let i = 1; i <= totalRows; i++) {
      auxArray.push(i);
    }
    setRowsArray(auxArray);
  }, [totalRows]);

  return (
    <ColumnContainer>
      <RowContainer />
      {rowsArray &&
        rowsArray.map((RowIndex) => (
          <RowContainer key={RowIndex}>{RowIndex}</RowContainer>
        ))}
    </ColumnContainer>
  );
}
