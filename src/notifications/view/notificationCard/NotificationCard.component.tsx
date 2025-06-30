import { iconByType } from "@/src/shared/lib/notificationIcons";
import { TextView } from "@/src/shared/ui/textView/TextView.component";
import { useThemeToggle } from "@/src/theme/ThemeContext";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { Notification } from "../../model/notification.types";
import { styles } from "./NotificationCard.styles";

const FADE_IN_DURATION = 1500;

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
    <Animated.View entering={FadeIn.duration(FADE_IN_DURATION)}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.container,
          {
            backgroundColor: notification.read
              ? colors.card
              : colors.notificationRead,
            borderColor: colors.border,
          },
        ]}
      >
        <View style={styles.icon}>{iconByType[notification.type]}</View>
        <View>
          <TextView textStyles={styles.title}>{notification.title}</TextView>
          <TextView
            numberOfLines={1}
            textStyles={[
              styles.description,
              { color: isDark ? colors.text : "#444" },
            ]}
          >
            {notification.description}
          </TextView>
          <TextView
            textStyles={[styles.date, { color: isDark ? colors.text : "grey" }]}
          >
            {notification.date}
          </TextView>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};
