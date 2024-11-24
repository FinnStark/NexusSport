import "@/i18n";
import { useState, useEffect } from "react";
import { Text, View, Image } from "react-native";
import { indexStyles } from "@/style/indexStyle";
import Input from "@/components/ui/input";
import PasswordInput from "@/components/ui/passwordInput";
import { useTranslation } from "react-i18next";

export default function Index() {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(true);

  return (
    <View style={indexStyles.index}>
      <Image
        style={indexStyles.logo}
        source={require("@/assets/images/nexus-sport-logo.png")}
      />
      <Text style={indexStyles.paragraph}>Bienvenue sur Nexus Sport</Text>
      <Input placeholder={t("login")} />
      <PasswordInput placeholder={t("password")} />
    </View>
  );
}
