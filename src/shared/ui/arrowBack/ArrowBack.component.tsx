import { useThemeToggle } from "@/src/theme/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";

export const ArrowBack = () => {
  const router = useRouter();
  const { colors } = useThemeToggle();

  const handleBack = () => router.back();

  return (
    <TouchableOpacity onPress={handleBack} hitSlop={8}>
      <Ionicons name="arrow-back" size={24} color={colors.text} />
    </TouchableOpacity>
  );
};
