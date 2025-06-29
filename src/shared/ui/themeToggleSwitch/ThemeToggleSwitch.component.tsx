import { useThemeToggle } from "@/src/theme/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, ViewStyle } from "react-native";

interface IThemeToggleSwitch {
  styles?: ViewStyle | ViewStyle[];
}

export const ThemeToggleSwitch = ({ styles }: IThemeToggleSwitch) => {
  const { theme, toggleTheme, colors } = useThemeToggle();

  return (
    <TouchableOpacity
      onPress={toggleTheme}
      activeOpacity={0.8}
      style={styles}
    >
      <Ionicons
        name={theme === "dark" ? "moon" : "sunny"}
        size={30}
        color={colors.text}
      />
    </TouchableOpacity>
  );
};
