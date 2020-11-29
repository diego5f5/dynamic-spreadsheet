import React, { useState } from "react";

// Libraries
import { connect } from "react-redux";

// Logo
import Logo from "../assets/spreadsheet.svg";

// Components
import Cell from "../components/Cell";
import IndexColumn from "../components/IndexColumn";
import AddColumnsModal from "../components/AddColumnsModal";
import HandleData from "../components/HandleData";

// Styles
import {
  Container,
  SpreadsheetLogo,
  MainTitle,
  HeaderContainer,
  HeaderSection,
  ColButton,
  SpreadsheetContainer,
  FooterContainer,
  AddRowsButton,
  GridWrapper,
  Column,
  ColumnHeader,
} from "./styles";

// Redux call for the action(SET_SPREADSHEET_DATA) of updating the spreadsheet data
const setSpreadsheetData = (data) => {
  return {
    type: "SET_SPREADSHEET_DATA",
    data,
  };
};

// Main screen rendering component
const Main = ({ spreadsheetData, dispatch }) => {
  const [modalIsShowing, setModalIsShowing] = useState(false);

  // Function to handle changes made to header fields
  const handleHeaderChange = (value, indexColumn) => {
    const auxData = { ...spreadsheetData };
    auxData.columns[indexColumn].columnTitle = value;
    dispatch(setSpreadsheetData(auxData));
  };

  // Function to handle changes made to cell fields
  const handleCellChange = (value, indexColumn, indexRow) => {
    const auxData = { ...spreadsheetData };
    auxData.columns[indexColumn].rows[indexRow].value = value;
    dispatch(setSpreadsheetData(auxData));
  };

  // Adds to the columns created the number of rows defined in the function call
  const addRows = (number) => {
    const auxData = { ...spreadsheetData };
    auxData.columns.forEach((column) => {
      for (let i = 0; i < number; i++) {
        column.rows.push({ value: "" });
      }
    });
    auxData.totalRows += number;
    dispatch(setSpreadsheetData(auxData));
  };

  // Function to create columns. When creating the first column of the spreadsheet, by default the number of rows added will be 10, and the other columns created will follow the current number of rows
  const createNewColumn = (column) => {
    // First column created
    if (spreadsheetData.columns.length === 0) {
      for (let i = 0; i < 10; i++) {
        column.rows.push({ value: "" });
      }
      dispatch(
        setSpreadsheetData({
          totalRows: 10,
          columns: [column],
        })
      );
    } else {
      // Other columns created
      for (let i = 0; i < spreadsheetData.totalRows; i++) {
        column.rows.push({ value: "" });
      }
      const auxData = { ...spreadsheetData };
      auxData.columns.push(column);
      dispatch(setSpreadsheetData(auxData));
    }
  };

  return (
    <Container>
      <HeaderContainer>
        <HeaderSection />
        <HeaderSection>
          <MainTitle>Dynamic Spreadsheet</MainTitle>
          <SpreadsheetLogo src={Logo} />
        </HeaderSection>
        <HeaderSection>
          <HandleData />
        </HeaderSection>
      </HeaderContainer>

      <ColButton
        title="Add a new Column"
        onClick={() => {
          setModalIsShowing(true);
        }}
      >
        Add column +
      </ColButton>

      {modalIsShowing ? (
        <AddColumnsModal
          handleSave={createNewColumn}
          closeModal={() => setModalIsShowing(false)}
        />
      ) : null}

      {spreadsheetData &&
      spreadsheetData.columns &&
      spreadsheetData.columns.length !== 0 ? (
        <SpreadsheetContainer>
          <GridWrapper>
            <IndexColumn />
            {spreadsheetData.columns.map((column, indexColumn) => (
              <Column key={indexColumn}>
                <ColumnHeader
                  title={column.columnTitle}
                  placeholder={"Column Title"}
                  onChange={(e) =>
                    handleHeaderChange(e.target.value, indexColumn)
                  }
                  value={column.columnTitle}
                />
                {column.rows.map((row, indexRow) => (
                  <Cell
                    key={`${indexColumn}-${indexRow}`}
                    columnType={column.columnType}
                    isRequired={column.isRequired}
                    selectOptions={column.selectOptions}
                    onChangeValue={(e) => {
                      handleCellChange(e.target.value, indexColumn, indexRow);
                    }}
                    value={
                      spreadsheetData.columns[indexColumn].rows[indexRow].value
                    }
                  />
                ))}
              </Column>
            ))}
          </GridWrapper>
        </SpreadsheetContainer>
      ) : null}

      <FooterContainer>
        {spreadsheetData.columns.length !== 0 ? (
          <AddRowsButton title={"Add 10 more rows"} onClick={() => addRows(10)}>
            Add 10 rows +
          </AddRowsButton>
        ) : null}
      </FooterContainer>
    </Container>
  );
};

export default connect((state) => ({ spreadsheetData: state }))(Main);
