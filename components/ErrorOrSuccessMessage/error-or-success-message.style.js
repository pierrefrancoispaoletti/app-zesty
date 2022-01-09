import { Text } from "react-native";
import styled from "styled-components/native";

export const ErrorOrSuccessStyled = styled(Text)`
  position: fixed;
  bottom: 10px;
  z-index: 200;
  background: ${({ error }) => (error ? "#FFBABA" : "#DFF2BF")};
  font-size: 1em;
  color: ${({ error }) => (error ? "#E20511" : "#4F8A10")};
  padding: 12px;
  border: 3px solid ${({ error }) => (error ? "#E20511" : "#4F8A10")};
  border-radius: 50px;
  text-align: center;
`;
