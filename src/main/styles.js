import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  border-radius: 10px;
  height: calc(100vh - 40px);
  background-color: white;
`;

// Header
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const MainTitle = styled.h2`
  color: #305dff;
  margin-right: 10px;
  text-align: center;
`;

export const SpreadsheetLogo = styled.img`
  height: 35px;
`;

export const ColButton = styled.button`
  height: 35px;
  min-height: 35px;
  padding: 0 10px;
  border: none;
  letter-spacing: 1px;
  border-radius: 5px;
  color: white;
  background-color: #305dff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin: 10px 0 10px 0;

  :hover {
    opacity: 0.7;
  }
`;

// Body
export const SpreadsheetContainer = styled.div`
  display: flex;
  overflow: auto;
  max-width: 100%;

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-button {
    width: 8px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: #d8d8d8;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #d8d8d8;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #d8d8d8;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-track:hover {
    background: transparent;
  }
  ::-webkit-scrollbar-track:active {
    background: transparent;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
`;

export const GridWrapper = styled.div`
  display: flex;
  border: solid 1px #989898;
  height: max-content;
`;

export const Column = styled.div`
  width: 150px;
`;

export const ColumnHeader = styled.div`
  padding: 3px 3px;
  font-weight: bold;
  font-size: 14px;
  margin: auto;
  height: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border: solid 1px #989898;
  text-align: center;
`;

// Footer
export const FooterContainer = styled.div`
  display: flex;
  margin: 5px 0;
`;

export const AddRowsButton = styled.button`
  height: 30px;
  min-height: 20px;
  padding: 0 5px;
  border: solid 2px #305dff;
  letter-spacing: 1px;
  border-radius: 5px;
  color: #305dff;
  background-color: white;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
`;
