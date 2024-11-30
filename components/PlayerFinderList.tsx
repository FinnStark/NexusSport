import { getSearchingForPlayerList } from "@/services/HomeService";
import { useCallback, useState } from "react";
import { RefreshControl, FlatList } from "react-native";
import PlayerSearchItem from "./PlayerFinderItem";
import { COLOR_PRUSSIAN_BLUE_BG } from "@/utils/constantsStyle";

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
      style={{
        width: "96%",
        backgroundColor: COLOR_PRUSSIAN_BLUE_BG,
      }}
      keyExtractor={(item) => item.id} // Clé unique pour chaque élément
      renderItem={({ item }) => <PlayerSearchItem playerFinder={item} />}
    />
  );
}
