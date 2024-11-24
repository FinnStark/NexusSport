import { TouchableOpacity, Text } from "react-native";
import { buttonStyle } from "@/style/buttonStyle";

interface InputProps {
  onPress: () => void;
  title: string;
}

export default function MyButton({ onPress, title }: InputProps) {
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle.signInButton}>
      <Text style={buttonStyle.signInButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}
