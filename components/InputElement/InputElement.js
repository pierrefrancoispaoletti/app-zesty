import React from "react";
import { InputElementStyled } from "./input-element.style";

const InputElement = ({ handleChange, ...props }) => {
  return (
    <InputElementStyled onChangeText={(e) => handleChange(e)} {...props} />
  );
};

export default InputElement;
