import { MainContainer } from "@/src/shared/ui/mainContainer/MainContainer.component";
import { TextView } from "@/src/shared/ui/textView/TextView.component";
import { useThemeToggle } from "@/src/theme/ThemeContext";
import { styles } from "@/styles/+not-found";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";

export default function NotFoundScreen() {
  const { colors } = useThemeToggle();
  const router = useRouter();

  const handleBack = () => router.replace("/");

  return (
    <MainContainer>
      <View style={styles.container}>
        <Ionicons
          name="alert-circle-outline"
          size={64}
          color="#e98d24"
          style={styles.icon}
        />
        <TextView textStyles={styles.title}>
          ¡Vaya! Página no encontrada
        </TextView>
        <TextView textStyles={styles.subtitle}>
          Ocurrió un error o la pantalla que buscas no existe.
          {"\n"}Por favor, revisa la URL o vuelve al inicio.
        </TextView>
        <TouchableOpacity
          style={[styles.button, { borderColor: colors.primary }]}
          onPress={handleBack}
        >
          <TextView textStyles={styles.buttonText}>Ir al inicio</TextView>
        </TouchableOpacity>
      </View>
    </MainContainer>
  );
}
