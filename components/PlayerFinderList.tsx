import { getSearchingForPlayerList } from "@/services/HomeService";
import { useCallback, useState } from "react";
import { View, Text, RefreshControl, FlatList } from "react-native";
import PlayerSearchItem from "./PlayerFinderItem";

export default function PlayerFinderList() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      data={getSearchingForPlayerList()}
      keyExtractor={(item) => item.id} // Clé unique pour chaque élément
      renderItem={({ item }) => <PlayerSearchItem _playerFinder={item} />}
    />
  );
}
