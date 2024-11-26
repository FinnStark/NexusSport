import "@/i18n";
import { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { useRouter } from "expo-router";
import { indexStyles } from "@/style/indexStyle";
import { commonStyles } from "@/style/commonStyle";
import Input from "@/components/ui/input";
import MyButton from "@/components/ui/button";
import { signInService } from "@/services/UserService";

export default function Index() {
  const { t } = useTranslation();
  const [nbLoginAtempt, setNbLoginAtempt] = useState(0);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignInPress = () => {
    if (signInService(user, password)) {
      /* TODO : Verification de comment se logger, où renvoyer etc, des cookies? utiliser des tokens pour securiser la co */
      router.push("/home");
    } else {
      setNbLoginAtempt(nbLoginAtempt + 1);
    }
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
      <Text style={commonStyles.paragraph}>{t("Welcome")}</Text>
      <Input
        _placeholder={t("Login")}
        _onChangeValue={setUser}
        _secureTextEntry={false}
      />
      <Input
        _placeholder={t("Password")}
        _onChangeValue={setPassword}
        _secureTextEntry={true}
      />
      <MyButton title={t("SignIn")} onPress={handleSignInPress} />
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
