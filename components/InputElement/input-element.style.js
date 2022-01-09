import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

const isError = (props) => {
  if (props.error) {
    return css`
      border: 2px solid red;
    `;
  }
};

export const InputElementStyled = styled(TextInput)`
  width: 100%;
  height: 50px;
  background: #fafafa;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 12px;
  ${isError}
`;
