import { TextInput } from "react-native";
import { inputStyle } from "@/style/inputStyle";

interface InputProps {
  placeholder: string;
}

export default function Input({ placeholder }: InputProps) {
  return <TextInput style={inputStyle.logInput} placeholder={placeholder} />;
}
