import "@/i18n";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { indexStyles } from "@/style/indexStyle";
import { commonStyles } from "@/style/commonStyle";
import { useTranslation } from "react-i18next";
import MyButton from "@/components/ui/button";
import { useRouter } from "expo-router";

export default function Index() {
  const { t, i18n } = useTranslation();
  const router = useRouter();

  const handleLoginPress = () => {
    router.push("/");
  };

  return (
    <View style={indexStyles.index}>
      <Text style={commonStyles.paragraph}>
        This is the home page! Il va se passer pleinde choses ici. {"\n\n"}{" "}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam unde
        quas iste temporibus, aspernatur earum labore natus voluptate
        perferendis vel ratione itaque autem similique, ut obcaecati in neque
        magnam possimus.
      </Text>
      <MyButton title={t("Back")} onPress={handleLoginPress} />
    </View>
  );
}
