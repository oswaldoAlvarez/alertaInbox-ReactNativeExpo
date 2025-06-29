import { useThemeToggle } from "@/src/theme/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";

export const ThemeToggleSwitch = () => {
  const { isDark, toggleTheme, colors } = useThemeToggle();

  return (
    <TouchableOpacity onPress={toggleTheme} activeOpacity={0.8}>
      <Ionicons
        name={isDark ? "moon" : "sunny"}
        size={30}
        color={colors.text}
      />
    </TouchableOpacity>
  );
};
