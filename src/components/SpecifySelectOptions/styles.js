import styled from "styled-components";

// Libraries
import { FaTrashAlt } from "react-icons/fa";

export const Container = styled.div``;

export const AddItemSection = styled.div`
  display: flex;
`;

export const ItemInput = styled.input`
  width: 100%;
  height: 35px;
  border: solid 2px #989898;
  border-radius: 5px;
  margin-bottom: 15px;
  margin-right: 5px;
  padding: 0 5px;
  font-size: 16px;

  :focus {
    border: solid 2px #305dff;
  }
`;

export const AddItemButton = styled.button`
  user-select: none;
  min-width: 60px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  margin-left: 5px;
  border-radius: 5px;
  font-weight: bold;
  color: #ffffff;
  background-color: ${(props) => (props.active ? "#305dff" : "#989898")};
  border: none;

  :hover {
    cursor: ${(props) => (props.active ? "pointer" : "unset")};
    opacity: ${(props) => (props.active ? "0.8" : "1")};
  }
`;

export const OptionsListContainer = styled.div``;

export const OptionItemSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-left: solid 2px #305dff;
  border-right: solid 2px #305dff;
  margin-bottom: 8px;
  padding: 0 5px;
  background-color: white;
`;

export const ItemName = styled.p`
  color: #000000;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const RemoveIcon = styled(FaTrashAlt)`
  width: 15px;
  height: 15px;
  color: #c31818;

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
