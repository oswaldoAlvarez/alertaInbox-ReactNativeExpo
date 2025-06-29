import { iconByType } from "@/src/shared/lib/notificationIcons";
import { MainContainer } from "@/src/shared/ui/mainContainer/MainContainer.component";
import { TextView } from "@/src/shared/ui/textView/TextView.component";
import { useThemeToggle } from "@/src/theme/ThemeContext";
import { styles } from "@/styles/notification/[id]";
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
      <View style={styles.notFoundContainer}>
        <TextView>No encontrada</TextView>
      </View>
    );
  }

  const handleBack = () => router.back();

  return (
    <MainContainer>
      <View style={styles.container}>
        <View style={styles.icon}>{iconByType[notification.type]}</View>
        <TextView textStyles={styles.title}>{notification.title}</TextView>
        <TextView
          textStyles={[
            styles.description,
            {
              color: isDark ? colors.text : "#444",
            },
          ]}
        >
          {notification.description}
        </TextView>
        <TextView
          style={[
            styles.date,
            {
              color: isDark ? colors.text : "grey",
            },
          ]}
        >
          {notification.date}
        </TextView>
        <TouchableOpacity
          onPress={handleBack}
          style={[
            styles.button,
            {
              borderColor: colors.border,
            },
          ]}
        >
          <TextView textStyles={styles.textButton}>Volver</TextView>
        </TouchableOpacity>
      </View>
    </MainContainer>
  );
}
