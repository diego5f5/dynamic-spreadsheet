import styled from "styled-components";

export const Container = styled.div``;

export const InputCell = styled.input`
  width: 100%;
  border: ${(props) =>
    props.error ? "solid 1px #ef2b2b" : "solid 1px #000000"};
  background-color: ${(props) => (props.error ? "#f5b5b5" : "#ffffff")};
  height: 24px;
`;
