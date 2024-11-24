import { TextInput } from "react-native";
import { inputStyle } from "@/style/inputStyle";

interface InputProps {
  placeholder: string;
}

export default function PasswordInput({ placeholder }: InputProps) {
  return (
    <TextInput
      style={inputStyle.logInput}
      placeholder={placeholder}
      secureTextEntry={true}
    />
  );
}
