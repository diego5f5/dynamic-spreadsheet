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

export const HeaderContainer = styled.div`
  display: flex;
  margin-top: 8px;
  width: 100%;
`;

export const HeaderSection = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  :last-of-type {
    justify-content: flex-end;
  }
`;

export const MainTitle = styled.p`
  color: #305dff;
  margin-right: 10px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
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
  margin: 8px 0 8px 0;

  :hover {
    opacity: 0.7;
  }
`;

export const SpreadsheetContainer = styled.div`
  display: flex;
  overflow: auto;
  max-width: 100%;
`;

export const GridWrapper = styled.div`
  display: flex;
  border: solid 1px #989898;
  height: max-content;
`;

export const Column = styled.div`
  width: 150px;
`;

export const ColumnHeader = styled.input`
  padding: 0 3px;
  font-weight: bold;
  overflow: hidden;
  font-size: 14px;
  height: 24px;
  width: 100%;
  border: solid 1px #989898;
  text-align: center;

  :focus {
    border: solid 2px #305dff;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  margin: 8px 0;
`;

export const AddRowsButton = styled.button`
  height: 35px;
  min-height: 35px;
  padding: 0 5px;
  border: solid 2px #305dff;
  letter-spacing: 1px;
  border-radius: 5px;
  color: #305dff;
  background-color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
`;
