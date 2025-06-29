import { useThemeToggle } from "@/src/theme/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable } from "react-native";
import { styles } from "./MenuButton.styles";

export const MenuButton = () => {
  const router = useRouter();
  const { colors } = useThemeToggle();

  return (
    <Pressable
      onPress={() => router.push("/settings")}
      style={styles.container}
    >
      <Ionicons name="menu" size={24} color={colors.text} />
    </Pressable>
  );
};
