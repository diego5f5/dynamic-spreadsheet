import React, { useState } from "react";

// Logo
import spreadsheet from "../assets/spreadsheet.svg";

// Components
import Cell from "../components/Cell";
import IndexColumn from "../components/IndexColumn";
import AddingColumnsModal from "../components/AddingColumnsModal";

// Styles
import {
  Container,
  SpreadsheetLogo,
  MainTitle,
  HeaderContainer,
  ColButton,
  SpreadsheetContainer,
  FooterContainer,
  AddRowsButton,
  GridWrapper,
  Column,
  ColumnHeader,
} from "./styles";

const testData = [
  {
    columnName: "Teste 0",
    columnType: "text",
    isRequired: true,
    rows: [
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
    ],
  },
  {
    columnName: "Teste 1 wqeqwe wqewqe wqeq ",
    columnType: "number",
    isRequired: false,
    rows: [
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
    ],
  },
];

export default function Main() {
  const [spreadsheetData, setSpreadsheetData] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [modalIsShowing, setModalIsShowing] = useState(false);

  const handleChangeInput = (value, indexC, indexR) => {
    const auxData = [...spreadsheetData];
    auxData[indexC].rows[indexR].value = value;
    setSpreadsheetData(auxData);
  };

  const addRows = (number) => {
    const auxData = [...spreadsheetData];
    auxData.forEach((column) => {
      for (let i = 0; i < number + totalRows; i++) {
        column.rows.push({ value: "" });
      }
    });
    setSpreadsheetData(auxData);
    setTotalRows(number + totalRows);
  };

  const createNewColumn = (column) => {};

  return (
    <Container>
      <HeaderContainer>
        <MainTitle>Dynamic Spreadsheet</MainTitle>
        <SpreadsheetLogo src={spreadsheet} />
      </HeaderContainer>

      <ColButton
        title="Add a new Column"
        onClick={() => {
          setModalIsShowing(true);
          // createNewColumn();
        }}
      >
        New column +
      </ColButton>

      {modalIsShowing ? (
        <AddingColumnsModal
          handleSave={createNewColumn}
          closeModal={() => setModalIsShowing(false)}
        />
      ) : null}

      {spreadsheetData && spreadsheetData.length !== 0 ? (
        <SpreadsheetContainer>
          <GridWrapper>
            <IndexColumn totalRows={totalRows} />
            {spreadsheetData.map((column, indexC) => (
              <Column key={indexC}>
                <ColumnHeader title={column.columnName}>
                  {column.columnName}
                </ColumnHeader>

                {column.rows.map((row, indexR) => (
                  <Cell
                    key={`${indexC}-${indexR}`}
                    columnType={column.columnType}
                    onChangeValue={(e) => {
                      handleChangeInput(e.target.value, indexC, indexR);
                    }}
                    value={spreadsheetData[indexC].rows[indexR].value}
                  />
                ))}
              </Column>
            ))}
          </GridWrapper>
        </SpreadsheetContainer>
      ) : null}

      <FooterContainer>
        {spreadsheetData.length !== 0 ? (
          <AddRowsButton onClick={() => addRows(10)}>
            Add 10 rows +
          </AddRowsButton>
        ) : null}
      </FooterContainer>
    </Container>
  );
}
