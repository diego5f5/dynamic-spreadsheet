import styled from "styled-components";

export const Container = styled.div``;

export const SelectCell = styled.select`
  width: 100%;
  border: solid 1px #989898;
  background-color: ${(props) => (props.error ? "#f5b5b5" : "#ffffff")};
  height: 24px;
  padding: 0 3px;

  :focus {
    border: solid 2px #305dff;
  }
`;

export const SelectOption = styled.option`
  font-size: 14px;
`;

export const InputCell = styled.input`
  width: 100%;
  border: solid 1px #989898;
  background-color: ${(props) => (props.error ? "#f5b5b5" : "#ffffff")};
  height: 24px;
  padding: 0 3px;

  :focus {
    border: solid 2px #305dff;
  }
`;
