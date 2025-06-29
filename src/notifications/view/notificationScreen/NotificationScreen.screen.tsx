import { MainContainer } from "@/src/shared/ui/mainContainer/MainContainer.component";
import { TextView } from "@/src/shared/ui/textView/TextView.component";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { notificationMocks } from "../../model/notification.mocks";
import {
  Notification,
  NotificationCategory,
} from "../../model/notification.types";
import { useNotifications } from "../../view-model/useNotifications.hook";
import { Badge } from "../badge/Badge.component";
import { HomeTags } from "../homeTags/HomeTags.components";
import { MenuButton } from "../menuButton/MenuButton.component";
import { NotificationCard } from "../notificationCard/NotificationCard.component";
import { styles } from "./NotificationScreen.styles";

export const NotificationScreen = () => {
  const router = useRouter();
  const { notifications, simulatePush, unreadCount, addNotification } =
    useNotifications();

  const [category, setCategory] = useState<NotificationCategory>("all");

  useEffect(() => {
    if (notifications.length === 0) {
      notificationMocks.forEach((mock) => addNotification(mock));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRedirectToNotification = (item: Notification) =>
    router.push(`/notification/${item.id}`);

  const filtered =
    category === "all"
      ? notifications
      : notifications.filter((n) => n.type === category);

  return (
    <MainContainer viewStyles={styles.container}>
      <MenuButton />
      <View style={styles.header}>
        <TextView textStyles={styles.title}>Notificaciones</TextView>
        <View style={styles.badgeContainer}>
          <Badge count={unreadCount} />
          <Ionicons name="notifications-outline" size={28} color="yellow" />
        </View>
      </View>
      <TouchableOpacity onPress={simulatePush} style={styles.button}>
        <TextView style={styles.buttonText}>+ Simular Push</TextView>
      </TouchableOpacity>
      <View>
        <HomeTags active={category} setCategory={setCategory} />
      </View>
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <NotificationCard
            key={item.id}
            notification={item}
            onPress={() => handleRedirectToNotification(item)}
          />
        )}
        ListEmptyComponent={
          <TextView style={styles.textEmpty}>
            No tienes notificaciones aún.
          </TextView>
        }
      />
    </MainContainer>
  );
};
