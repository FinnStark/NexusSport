import { View, Text } from "react-native";
import { bottomHomeMenuStyle } from "@/style/bottomHomeMenuStyle";
import React from "react";
import { Image } from "react-native";
import { BG_COLOR, COLOR_CERULEAN } from "@/utils/constantsStyle";

export default function BottomHomeMenu() {
  return (
    <View style={bottomHomeMenuStyle.bottomHomeMenu}>
      {/* TODO : rendre ça bieng (style découpé dans des fichiers, image dans un componant etc...) */}
      {/* 1 : Profil / Profil (avec paramètres dans profil) */}
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
            borderColor: BG_COLOR,
            borderWidth: 2,
          }}
          source={require("@/assets/images/default_profile_pic.png")}
        />
      </View>
      <Text style={{ color: "#FFF" }}>2{/* Clubs? */}</Text>
      <Text style={{ color: "#FFF" }}>3{/* Accueil */}</Text>
      <Text style={{ color: "#FFF" }}>4{/* MPs / MP */}</Text>
      <Text style={{ color: "#FFF" }}>5{/* Paramètres / Filtres */}</Text>
    </View>
  );
}
