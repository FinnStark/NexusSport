import { PlayerFinder } from "@/models/PlayerFinder";
import { commonStyles } from "@/style/commonStyle";
import { COLOR_PRUSSIAN_BLUE, COLOR_WHITE } from "@/utils/constantsStyle";
import { useCallback, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

interface InputProps {
  _playerFinder: PlayerFinder;
}

export default function PlayerSearchItem({ _playerFinder }: InputProps) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{_playerFinder.seeker}</Text>
      <Text style={commonStyles.paragraph}>
        {_playerFinder.datePublied.toString()}
      </Text>
      <Text style={commonStyles.paragraph}>{_playerFinder.description}</Text>
      <Text style={commonStyles.paragraph}>
        Commentaires : {_playerFinder.comment}
      </Text>
      <Text style={commonStyles.paragraph}>
        Joueurs inscrits : {_playerFinder.playersRegistered}/
        {_playerFinder.playersMax}
      </Text>
      <Text style={commonStyles.paragraph}>
        Date : {_playerFinder.dateSchedule.toString()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: COLOR_PRUSSIAN_BLUE,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLOR_WHITE,
  },
});
