import styled from "styled-components";

// Libraries
import { FaSave, FaDownload, FaTrashAlt } from "react-icons/fa";

export const OptionButton = styled.button`
  border: none;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.actived ? "#305dff" : "#989898")};
  border-radius: 5px;
  color: #ffffff;
  margin-right: 10px;
  box-shadow: 0px 4px 4px -2px rgba(148, 148, 148, 1);

  :hover {
    cursor: ${(props) => (props.actived ? "pointer" : "unset")};
    opacity: ${(props) => (props.actived ? "0.8" : "unset")};
  }
`;

export const DownloadIcon = styled(FaDownload)`
  width: 15px;
  height: 15px;
  color: #ffffff;
`;

export const SaveIcon = styled(FaSave)`
  width: 15px;
  height: 15px;
  color: #ffffff;
`;

export const RemoveIcon = styled(FaTrashAlt)`
  width: 15px;
  height: 15px;
  color: #ffffff;
`;
