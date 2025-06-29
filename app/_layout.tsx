import { ArrowBack } from "@/src/shared/ui/arrowBack/ArrowBack.component";
import { ThemeProvider, useThemeToggle } from "@/src/theme/ThemeContext";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  const { theme, colors } = useThemeToggle();

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.card,
          },
          headerTintColor: colors.text,
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="settings"
          options={{
            headerTitle: "Configuración",
            headerLeft: () => <ArrowBack />,
            headerStyle: {
              backgroundColor: colors.card,
            },
            headerTintColor: colors.text,
          }}
        />
        <Stack.Screen name="+not-found" options={{ headerShown: false }} />
        <Stack.Screen name="notification" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style={theme === "dark" ? "light" : "dark"} />
    </>
  );
}
