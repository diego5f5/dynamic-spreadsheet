import styled from "styled-components";

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
  border-radius: 4px;
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  width: 450px;
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
  height: 50px;
  display: flex;
  padding: 0 16px;
  border-bottom: solid 1px #707070;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  margin: 0 !important;
  font-weight: bold;
  color: #305dff;
  background-color: transparent;
`;

export const ModalHeaderText = styled.p``;

export const CloseModal = styled.span`
  color: #aeafb1;
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
  padding: 16px;
`;
