import { ArrowBack } from "@/src/shared/ui/arrowBack/ArrowBack.component";
import { useThemeToggle } from "@/src/theme/ThemeContext";
import { Stack } from "expo-router";

export default function NotificationLayout() {
  const { colors } = useThemeToggle();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.card,
        },
        headerTintColor: colors.text,
        headerLeft: () => <ArrowBack />,
      }}
    >
      <Stack.Screen
        name="[id]"
        options={{
          headerTitle: "Notificación",
          headerTitleAlign: "center"
        }}
      />
    </Stack>
  );
}
