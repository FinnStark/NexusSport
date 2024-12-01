import { PlayerFinder } from "@/models/PlayerFinder";
import { commonStyles } from "@/style/commonStyle";
import { COLOR_PRUSSIAN_BLUE, COLOR_WHITE } from "@/utils/constantsStyle";
import {
  capitalize,
  getPostTimeAgo,
  getScheduleDateStr,
} from "@/utils/functions";
import { useCallback, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import JoinGameButton from "@/components/JoinGameButton";

interface PlayerSearchItemProps {
  playerFinder: PlayerFinder;
}

export default function PlayerSearchItem({
  playerFinder,
}: PlayerSearchItemProps) {
  const [playersJoined, SetPlayersJoined] = useState(0);

  function handleJoinPress(nb: number) {
    if (playersJoined + 1 + nb <= playerFinder.playersMax) {
      SetPlayersJoined(playersJoined + nb);
    }
  }

  return (
    <View style={styles.itemContainer}>
      <View style={styles.container}>
        <Text style={styles.user}>{capitalize(playerFinder.seeker)}</Text>
        <Text style={styles.date}>
          {getPostTimeAgo(playerFinder.datePublied.toString())}
        </Text>
      </View>
      <Text style={commonStyles.paragraph}>{playerFinder.description}</Text>

      <View style={styles.container}>
        <View style={[styles.container, { alignItems: "center" }]}>
          <Image
            source={require("@/assets/icons/Calendar.png")}
            style={styles.icon}
          />
          <Text style={commonStyles.paragraph}>
            {getScheduleDateStr(playerFinder.dateSchedule.toString())}
          </Text>
        </View>
        <View style={[styles.container, { alignItems: "center" }]}>
          <Image
            source={require("@/assets/icons/Messages-Bubble-Square.png")}
            style={styles.icon}
          />
          <Text style={commonStyles.paragraph}>{playerFinder.comment}</Text>
        </View>
      </View>
      <View style={[styles.container, { alignItems: "center" }]}>
        <JoinGameButton
          nbPlayersJoined={playersJoined}
          handleJoinPress={handleJoinPress}
        />
        <View style={[styles.container, { alignItems: "center" }]}>
          <Image
            source={require("@/assets/icons/Multiple-Neutral-2.png")}
            style={styles.icon}
          />
          <Text style={commonStyles.paragraph}>
            {1 + playersJoined}/{playerFinder.playersMax}
          </Text>
        </View>
      </View>
    </View>
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
