import "@/i18n";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { indexStyles } from "@/style/indexStyle";
import { commonStyles } from "@/style/commonStyle";
import { useTranslation } from "react-i18next";
import MyButton from "@/components/ui/button";
import { useRouter } from "expo-router";
import PlayerFinderList from "@/components/PlayerFinderList";

export default function Index() {
  const { t } = useTranslation();
  const router = useRouter();

  const handleLoginPress = () => {
    router.push("/");
  };

  return (
    <View style={indexStyles.index}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Image
          style={{ width: 30, height: 30 }}
          source={require("@/assets/images/burger-menu-icon.png")}
          tintColor="white"
        />
        <MyButton title={t("Back")} onPress={handleLoginPress} />
        <Image
          style={{ width: 30, height: 30 }}
          source={require("@/assets/images/filter-icon.png")}
          tintColor="white"
        />
      </View>
      <PlayerFinderList />
    </View>
  );
}
