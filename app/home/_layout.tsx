import { Slot } from "expo-router";
import BottomHomeMenu from "@/components/bottomHomeMenu";
import { View } from "react-native";

export default function HomeLayout() {
  return (
    <>
      <Slot />
      <BottomHomeMenu />
    </>
  );
}
