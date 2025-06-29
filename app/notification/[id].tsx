import { iconByType } from "@/src/shared/lib/notificationIcons";
import { MainContainer } from "@/src/shared/ui/mainContainer/MainContainer.component";
import { TextView } from "@/src/shared/ui/textView/TextView.component";
import { useThemeToggle } from "@/src/theme/ThemeContext";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { TouchableOpacity, View } from "react-native";
import { useNotificationStore } from "../../src/notifications/model/notification.store";

export default function NotificationDetail() {
  const { colors, isDark } = useThemeToggle();
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const notification = useNotificationStore((s) =>
    s.notifications.find((n) => n.id === id)
  );
  const markAsRead = useNotificationStore((s) => s.markAsRead);

  useEffect(() => {
    if (notification && !notification.read) {
      markAsRead(notification.id);
    }
  }, [notification, markAsRead]);

  if (!notification) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TextView>No encontrada</TextView>
      </View>
    );
  }

  return (
    <MainContainer>
      <View
        style={{
          padding: 24,
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <View style={{ marginBottom: 20 }}>
          {iconByType[notification.type]}
        </View>
        <TextView
          textStyles={{ fontWeight: "bold", fontSize: 22, marginBottom: 16 }}
        >
          {notification.title}
        </TextView>
        <TextView
          textStyles={{
            fontSize: 16,
            marginBottom: 16,
            color: isDark ? colors.text : "#444",
          }}
        >
          {notification.description}
        </TextView>
        <TextView
          style={{
            fontSize: 13,
            color: isDark ? colors.text : "grey",
            marginBottom: 30,
          }}
        >
          {notification.date}
        </TextView>
        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            borderWidth: 1,
            borderColor: "#d3d3d3",
            borderRadius: 8,
            paddingVertical: 12,
            paddingHorizontal: 24,
            alignItems: "center",
          }}
        >
          <TextView textStyles={{ fontWeight: "bold", fontSize: 16 }}>
            Volver
          </TextView>
        </TouchableOpacity>
      </View>
    </MainContainer>
  );
}
