import "@/i18n";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { indexStyles } from "@/style/indexStyle";
import { commonStyles } from "@/style/commonStyle";
import { useTranslation } from "react-i18next";
import MyButton from "@/components/ui/button";
import { useRouter } from "expo-router";

export default function HomePage() {
  const { t, i18n } = useTranslation();
  const router = useRouter();

  const handleLoginPress = () => {
    router.push("/");
  };

  return (
    <View style={indexStyles.index}>
      <Text style={commonStyles.paragraph}>{t("welcome")}</Text>
      <MyButton title={t("signIn")} onPress={handleLoginPress} />
    </View>
  );
}
