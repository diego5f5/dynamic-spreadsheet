import { createStore } from "redux";

const INITIAL_STATE = {
  totalRows: 0,
  columns: [],
};

const spreadsheetReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "SET_SPREADSHEET_DATA") {
    return {
      totalRows: action.data.totalRows,
      columns: action.data.columns,
    };
  }

  return state;
};

const store = createStore(spreadsheetReducer);

export default store;
