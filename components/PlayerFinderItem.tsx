import { PlayerFinder } from "@/models/PlayerFinder";
import { commonStyles } from "@/style/commonStyle";
import { COLOR_PRUSSIAN_BLUE, COLOR_WHITE } from "@/utils/constantsStyle";
import { capitalize, getPostTimeAgo } from "@/utils/functions";
import { useCallback, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

interface PlayerSearchItemProps {
  playerFinder: PlayerFinder;
}

export default function PlayerSearchItem({
  playerFinder,
}: PlayerSearchItemProps) {
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
        <Text style={commonStyles.paragraph}>
          Date : {playerFinder.dateSchedule.toString()}
        </Text>
        <Text style={commonStyles.paragraph}>
          Commentaires : {playerFinder.comment}
        </Text>
      </View>
      <Text style={commonStyles.paragraph}>
        Joueurs inscrits : {playerFinder.playersRegistered}/
        {playerFinder.playersMax}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
