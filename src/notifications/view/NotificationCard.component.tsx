import { iconByType } from "@/src/shared/lib/notificationIcons";
import { TextView } from "@/src/shared/ui/textView/TextView.component";
import { useThemeToggle } from "@/src/theme/ThemeContext";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Notification } from "../model/notification.types";

type INotificationCard = {
  notification: Notification;
  onPress: () => void;
};

export const NotificationCard = ({
  notification,
  onPress,
}: INotificationCard) => {
  const { colors, isDark } = useThemeToggle();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: notification.read
          ? colors.card
          : colors.notificationRead,
        borderColor: colors.border,
        borderWidth: 1,
        padding: 16,
        marginVertical: 8,
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View style={{ marginRight: 12 }}>{iconByType[notification.type]}</View>
      <View style={{ flex: 1 }}>
        <TextView textStyles={{ fontWeight: "bold", fontSize: 18 }}>
          {notification.title}
        </TextView>
        <TextView
          numberOfLines={1}
          textStyles={{ color: isDark ? colors.text : "#444", fontSize: 14 }}
        >
          {notification.description}
        </TextView>
        <TextView
          textStyles={{ fontSize: 12, color: isDark ? colors.text : "grey" }}
        >
          {notification.date}
        </TextView>
      </View>
    </TouchableOpacity>
  );
};
