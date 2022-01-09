import { Text, TouchableHighlight, View } from "react-native-web";
import styled from "styled-components/native";

export const ItemOverviewContainer = styled(View)`
  margin-bottom: 15px;
  position: relative;
`;

export const ItemOverViewTitle = styled(Text)`
  font-size: 18px;
  margin-bottom: 8px;
`;

export const DeleteItemIcon = styled(TouchableHighlight)`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #ffbaba;
  padding: 3px 6px;
  border-radius: 50px;
`;
