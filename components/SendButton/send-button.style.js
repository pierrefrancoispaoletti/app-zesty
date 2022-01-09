import { Text, TouchableHighlight } from "react-native-web";
import { css } from "styled-components";
import styled from "styled-components/native";

const isButtonDisabled = (props) => {
  if (props.disabled) {
    return css`
      background-color: lightgray;
    `;
  }
};

export const SendButtonStyled = styled(TouchableHighlight)`
  background: #ffed4e;
  padding: 8px;
  border-radius: 15px;
  font-weight: bold;
  text-transform: uppercase;
  align-self: flex-end;
  elevation: 3;
  margin-bottom: 8px ${isButtonDisabled};
`;

export const ButtonTextContentStyled = styled(Text)`
  color: white;
  font-size: 1em;
`;
