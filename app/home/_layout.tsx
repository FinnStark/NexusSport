import { Slot } from "expo-router";
import BottomHomeMenu from "@/components/BottomHomeMenu";
import { View } from "react-native";

export default function HomeLayout() {
  return (
    <>
      <Slot />
      <BottomHomeMenu />
    </>
  );
}
