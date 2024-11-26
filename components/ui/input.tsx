import { TextInput } from "react-native";
import { inputStyle } from "@/style/inputStyle";

interface InputProps {
  _placeholder: string;
  _onChangeValue: Function;
  _secureTextEntry: boolean;
}

export default function Input({
  _placeholder,
  _onChangeValue,
  _secureTextEntry,
}: InputProps) {
  return (
    <TextInput
      style={inputStyle.logInput}
      placeholder={_placeholder}
      secureTextEntry={_secureTextEntry}
      onChangeText={(value) => _onChangeValue(value)}
    />
  );
}
