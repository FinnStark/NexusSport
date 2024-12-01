import { PlayerFinder } from "@/models/PlayerFinder";
import { commonStyles } from "@/style/commonStyle";
import { COLOR_PRUSSIAN_BLUE, COLOR_WHITE } from "@/utils/constantsStyle";
import { capitalize, getPostTimeAgo } from "@/utils/functions";
import { useCallback, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

interface JoinGameButtonProps {
  nbPlayersJoined: number;
  handleJoinPress: Function;
}

export default function JoinGameButton({
  nbPlayersJoined,
  handleJoinPress,
}: JoinGameButtonProps) {
  const button =
    nbPlayersJoined == 0 ? (
      <TouchableOpacity onPress={() => handleJoinPress(1)}>
        <Text
          style={[
            commonStyles.paragraph,
            {
              textAlign: "center",
              backgroundColor: "blue",
              width: 230,
              fontSize: 20,
              borderRadius: 5,
            },
          ]}
        >
          Rejoindre
        </Text>
      </TouchableOpacity>
    ) : (
      <>
        <TouchableOpacity
          style={{
            backgroundColor: "red",
            width: 40,
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
          }}
          onPress={() => handleJoinPress(-1)}
        >
          <Text
            style={[
              commonStyles.paragraph,
              { textAlign: "center", fontSize: 20, fontWeight: "bold" },
            ]}
          >
            -
          </Text>
        </TouchableOpacity>
        <Text
          style={[
            commonStyles.paragraph,
            {
              textAlign: "center",
              backgroundColor: "blue",
              width: 150,
              fontSize: 20,
            },
          ]}
        >
          {nbPlayersJoined + " joueur(s)"}
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "green",
            width: 40,
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
          }}
          onPress={() => handleJoinPress(1)}
        >
          <Text
            style={[
              commonStyles.paragraph,
              { textAlign: "center", fontSize: 20, fontWeight: "bold" },
            ]}
          >
            +
          </Text>
        </TouchableOpacity>
      </>
    );
  return (
    <View style={[styles.container, { alignItems: "center" }]}>{button}</View>
  );
}

const styles = StyleSheet.create({
  icon: { tintColor: "white", width: 15, height: 15 },
  itemContainer: {
    padding: 10,
    marginVertical: 1,
    backgroundColor: COLOR_PRUSSIAN_BLUE,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLOR_WHITE,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between", // Espace entre les éléments
    padding: 5, // Optionnel : espacement interne
  },
  user: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLOR_WHITE,
  },
  date: {
    color: "gray",
  },
});
