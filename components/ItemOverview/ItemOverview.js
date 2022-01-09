import React from "react";
import { Image } from "react-native-elements";
import { ActivityIndicator } from "react-native";
import { Text, TouchableHighlight, View } from "react-native-web";
import {
  DeleteItemIcon,
  ItemOverviewContainer,
  ItemOverViewTitle,
} from "./item-overview.style";
const ItemOverview = ({ _id, title, picture, handleDelete }) => {
  return (
    <ItemOverviewContainer>
      <ItemOverViewTitle>{title}</ItemOverViewTitle>
      <Image
        source={{ uri: picture }}
        style={{ aspectRatio: 1, width: 300, height: 200 }}
        PlaceholderContent={<ActivityIndicator />}
        transition={true}
      />
      <DeleteItemIcon onPress={() => handleDelete(_id)}>
        <View>
          <Text style={{ color: "white" }}>X</Text>
        </View>
      </DeleteItemIcon>
    </ItemOverviewContainer>
  );
};

export default ItemOverview;
