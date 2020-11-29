import React, { useState, useEffect } from "react";

// Libraries
import { connect } from "react-redux";

// Styles
import { OptionButton, DownloadIcon, SaveIcon, RemoveIcon } from "./styles";

// Redux call for the action(SET_SPREADSHEET_DATA) of updating the spreadsheet data
const setSpreadsheetData = (data) => {
  return {
    type: "SET_SPREADSHEET_DATA",
    data,
  };
};

// Component for manipulating saved data, such as reading, deleting and saving
const HandleData = ({ spreadsheetData, dispatch }) => {
  const [localData, setLocalData] = useState({
    totalRows: 0,
    columns: [],
  });

  // Whenever the page loads, check if there is spreadsheet data saved in Local Storage
  useEffect(() => {
    getFromLocalStorage();
  }, []);

  // Take the data saved in Local Storage, set the state and return them if they exist
  const getFromLocalStorage = () => {
    let data = localStorage.getItem("@spreadsheetData");

    if (data !== null) {
      data = JSON.parse(data);
      setLocalData(data);
      return data;
    }
  };

  // Save current spreadsheet data to Local Storage
  const saveInLocalStorage = () => {
    localStorage.setItem("@spreadsheetData", JSON.stringify(spreadsheetData));
    alert("Data saved in Local Storage!");
    getFromLocalStorage();
  };

  // Clear current data on Local Storage
  const clearLocalStorage = () => {
    localStorage.clear();
    setLocalData({
      totalRows: 0,
      columns: [],
    });
  };

  return (
    <>
      <OptionButton
        onClick={() => saveInLocalStorage()}
        actived={spreadsheetData.columns.length !== 0}
        disabled={spreadsheetData.columns.length === 0}
        title="Save in Local Storage"
      >
        <SaveIcon />
      </OptionButton>
      <OptionButton
        onClick={() => {
          dispatch(setSpreadsheetData(getFromLocalStorage()));
        }}
        actived={localData.columns.length !== 0}
        disabled={localData.columns.length === 0}
        title="Get from Local Storage"
      >
        <DownloadIcon />
      </OptionButton>
      <OptionButton
        onClick={() => {
          clearLocalStorage();
        }}
        actived={localData.columns.length !== 0}
        disabled={localData.columns.length === 0}
        title="Clear Local Storage"
      >
        <RemoveIcon />
      </OptionButton>
    </>
  );
};

export default connect((state) => ({ spreadsheetData: state }))(HandleData);
