import styled from "styled-components";

// Libraries
import { FaRegSquare, FaRegCheckSquare } from "react-icons/fa";

export const Modal = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  position: relative;
  margin: auto;
  padding: 0;
  width: 302px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  animation-name: animatetop;
  animation-duration: 0.4s;

  @keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }
`;

export const ModalHeaderContainer = styled.div`
  height: 40px;
  display: flex;
  padding: 0 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  margin: 0 !important;
  font-weight: bold;
  color: #ffffff;
  background-color: #305dff;
  border-radius: 5px 5px 0 0;
`;

export const ModalHeaderText = styled.p``;

export const CloseModal = styled.span`
  color: #ffffff;
  float: right;
  font-size: 28px;
  font-weight: bold;

  :hover {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const ModalBodyContainer = styled.div`
  padding: 15px;
  background-color: #ffffff;
  border-radius: 0 0 5px 5px;
`;

export const LabelText = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 35px;
  border: solid 2px #989898;
  border-radius: 5px;
  padding: 0 5px;
  font-size: 16px;

  :focus {
    border: solid 2px #305dff;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
`;

export const OptionTypeContainer = styled.div`
  user-select: none;
  width: 60px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) => (props.selected ? "none" : "solid 2px #305dff")};
  font-size: 14px;
  margin: 0 5px;
  border-radius: 5px;
  font-weight: bold;
  color: ${(props) => (props.selected ? "#ffffff" : "#305dff")};
  background-color: ${(props) => (props.selected ? "#305dff" : "#ffffff")};

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }

  :first-of-type {
    margin-left: 0;
  }

  :last-of-type {
    margin-right: 0;
  }
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #305dff;
  font-size: 16px;
  width: max-content;
  cursor: pointer;
  user-select: none;
`;

export const UncheckedIcon = styled(FaRegSquare)`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const CheckedIcon = styled(FaRegCheckSquare)`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalButton = styled.button`
  width: 130px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-size: 14px;
  border-radius: 5px;
  font-weight: bold;
  color: #ffffff;
  background-color: ${(props) => (props.cancel ? "#989898" : "#305dff")};

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const Divider = styled.div`
  margin: 15px 0;
  height: 1px;
  width: 100%;
  background-color: #e4e2e2;
`;
