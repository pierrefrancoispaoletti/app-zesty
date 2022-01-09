import React from "react";
import { ButtonTextContentStyled, SendButtonStyled } from "./send-button.style";

const SendButton = ({ children, ...props }) => {
  return (
    <SendButtonStyled {...props}>
      <ButtonTextContentStyled>{children}</ButtonTextContentStyled>
    </SendButtonStyled>
  );
};

export default SendButton;
