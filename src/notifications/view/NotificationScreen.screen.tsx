import { MainContainer } from "@/src/shared/ui/mainContainer/MainContainer.component";
import { TextView } from "@/src/shared/ui/textView/TextView.component";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { notificationMocks } from "../model/notification.mocks";
import { useNotifications } from "../view-model/useNotifications.hook";
import { Badge } from "./Badge.component";
import { NotificationCard } from "./NotificationCard.component";
import { MenuButton } from "./menuButton/MenuButton.component";

export const NotificationScreen = () => {
  const router = useRouter();
  const { notifications, simulatePush, unreadCount, addNotification } =
    useNotifications();

  useEffect(() => {
    if (notifications.length === 0) {
      notificationMocks.forEach((mock) => addNotification(mock));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainContainer viewStyles={{ flex: 1, padding: 16 }}>
      <MenuButton />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 12,
        }}
      >
        <TextView textStyles={{ fontSize: 28, fontWeight: "bold" }}>
          Notificaciones
        </TextView>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Badge count={unreadCount} />
          <Ionicons name="notifications-outline" size={28} color="yellow" />
        </View>
      </View>
      <TouchableOpacity
        onPress={simulatePush}
        style={{
          backgroundColor: "#fff",
          borderWidth: 1,
          borderColor: "#d3d3d3",
          borderRadius: 8,
          paddingVertical: 12,
          alignItems: "center",
          marginBottom: 18,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>+ Simular Push</Text>
      </TouchableOpacity>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NotificationCard
            key={item.id}
            notification={item}
            onPress={() => router.push(`/notification/${item.id}`)}
          />
        )}
        ListEmptyComponent={
          <Text style={{ color: "#aaa", marginTop: 40, alignSelf: "center" }}>
            No tienes notificaciones aún.
          </Text>
        }
      />
    </MainContainer>
  );
};
