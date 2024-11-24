import "@/i18n";
import { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { indexStyles } from "@/style/indexStyle";
import { commonStyles } from "@/style/commonStyle";
import Input from "@/components/ui/input";
import PasswordInput from "@/components/ui/passwordInput";
import { useTranslation } from "react-i18next";
import MyButton from "@/components/ui/button";

export default function Index() {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [nbLoginAtempt, setNbLoginAtempt] = useState(0);

  const handleLoginPress = () => {
    console.log("je me log : " + nbLoginAtempt);
    setNbLoginAtempt(nbLoginAtempt + 1);
  };

  const handleForgotPasswordPress = () => {
    console.log("j'ai zappé mon mdp : " + nbLoginAtempt);
    setNbLoginAtempt(nbLoginAtempt + 1);
  };

  const handleSignUpPress = () => {
    console.log("je m'enregistre : " + nbLoginAtempt);
    setNbLoginAtempt(nbLoginAtempt + 1);
  };

  return (
    <View style={indexStyles.index}>
      <Image
        style={commonStyles.logo}
        source={require("@/assets/images/nexus-sport-logo.png")}
      />
      <Text style={commonStyles.paragraph}>{t("welcome")}</Text>
      <Input placeholder={t("login")} />
      <PasswordInput placeholder={t("password")} />
      <MyButton title={t("signIn")} onPress={handleLoginPress} />
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={handleForgotPasswordPress}>
          <Text style={commonStyles.paragraph}>{t("ForgottenPassword")}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignUpPress}>
          <Text style={commonStyles.link}>{t("SignUp")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
