import { View, Text } from "react-native";
import { bottomHomeMenuStyle } from "@/style/bottomHomeMenuStyle";
import React from "react";
import { Image } from "react-native";
import { COLOR_PRUSSIAN_BLUE, COLOR_CERULEAN } from "@/utils/constantsStyle";

export default function BottomHomeMenu() {
  return (
    <View style={bottomHomeMenuStyle.bottomHomeMenu}>
      {/* TODO : rendre ça bieng (style découpé dans des fichiers, image dans un componant etc...) */}
      <View
        style={{
          width: 32,
          height: 32,
          borderRadius: 15,
          borderColor: COLOR_CERULEAN,
          borderWidth: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            borderColor: COLOR_PRUSSIAN_BLUE,
            borderWidth: 2,
          }}
          source={require("@/assets/images/default_profile_pic.png")}
        />
      </View>
      <Text>2</Text>
      <Text>3</Text>
      <Text>4</Text>
      <Text>5</Text>
    </View>
  );
}
