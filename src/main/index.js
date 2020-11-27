import React, { useState } from "react";

// Logo
import Logo from "../assets/spreadsheet.svg";

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

const testData = {
  totalRows: 10,
  columns: [
    {
      columnTitle: "Teste 0",
      columnType: "text",
      isRequired: true,
      rows: [],
    },
  ],
};

export default function Main() {
  const [modalIsShowing, setModalIsShowing] = useState(false);
  const [spreadsheetData, setSpreadsheetData] = useState({
    totalRows: 0,
    columns: [],
  });

  const handleHeaderChange = (value, indexC) => {
    const auxData = { ...spreadsheetData };
    auxData.columns[indexC].columnTitle = value;
    setSpreadsheetData(auxData);
  };

  const handleCellChange = (value, indexC, indexR) => {
    const auxData = { ...spreadsheetData };
    auxData.columns[indexC].rows[indexR].value = value;
    setSpreadsheetData(auxData);
  };

  const addRows = (number) => {
    const auxData = { ...spreadsheetData };
    auxData.columns.forEach((column) => {
      for (let i = 0; i < number; i++) {
        column.rows.push({ value: "" });
      }
    });
    auxData.totalRows += number;
    setSpreadsheetData(auxData);
  };

  const createNewColumn = (column) => {
    // First column created
    if (spreadsheetData.columns.length === 0) {
      for (let i = 0; i < 10; i++) {
        column.rows.push({ value: "" });
      }
      setSpreadsheetData({
        totalRows: 10,
        columns: [column],
      });
    } else {
      // Other columns created
      for (let i = 0; i < spreadsheetData.totalRows; i++) {
        column.rows.push({ value: "" });
      }
      const auxData = { ...spreadsheetData };
      auxData.columns.push(column);
      setSpreadsheetData(auxData);
    }
  };

  return (
    <Container>
      <HeaderContainer>
        <MainTitle>Dynamic Spreadsheet</MainTitle>
        <SpreadsheetLogo src={Logo} />
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

      <button onClick={() => console.log(spreadsheetData)}>
        GET SPREADSHEET
      </button>

      {modalIsShowing ? (
        <AddingColumnsModal
          handleSave={createNewColumn}
          closeModal={() => setModalIsShowing(false)}
        />
      ) : null}

      {spreadsheetData &&
      spreadsheetData.columns &&
      spreadsheetData.columns.length !== 0 ? (
        <SpreadsheetContainer>
          <GridWrapper>
            <IndexColumn totalRows={spreadsheetData.totalRows} />
            {spreadsheetData.columns.map((column, indexC) => (
              <Column key={indexC}>
                <ColumnHeader
                  placeholder={"Column Title"}
                  onChange={(e) => handleHeaderChange(e.target.value, indexC)}
                  value={column.columnTitle}
                />
                {column.rows.map((row, indexR) => (
                  <Cell
                    key={`${indexC}-${indexR}`}
                    columnType={column.columnType}
                    isRequired={column.isRequired}
                    onChangeValue={(e) => {
                      handleCellChange(e.target.value, indexC, indexR);
                    }}
                    value={spreadsheetData.columns[indexC].rows[indexR].value}
                  />
                ))}
              </Column>
            ))}
          </GridWrapper>
        </SpreadsheetContainer>
      ) : null}

      <FooterContainer>
        {spreadsheetData.columns.length !== 0 ? (
          <AddRowsButton onClick={() => addRows(10)}>
            Add 10 rows +
          </AddRowsButton>
        ) : null}
      </FooterContainer>
    </Container>
  );
}
