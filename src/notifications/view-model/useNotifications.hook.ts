import { useNotificationStore } from "../model/notification.store";

export const useNotifications = () => {
  const notifications = useNotificationStore((store) => store.notifications);
  const addNotification = useNotificationStore(
    (store) => store.addNotification
  );
  const markAsRead = useNotificationStore((store) => store.markAsRead);
  const clearNotifications = useNotificationStore(
    (store) => store.clearNotifications
  );

  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  const simulatePush = () => {
    const types = ["alert", "message", "update"] as const;

    const type = types[Math.floor(Math.random() * types.length)];

    const titles = {
      alert: "Alerta importante",
      message: "Nuevo mensaje",
      update: "Actualización",
    };

    const descriptions = {
      alert: "Problema detectado en el sistema",
      message: "Tienes un mensaje nuevo",
      update: "Tu-app está actualizada",
    };

    addNotification({
      id: Date.now().toString(),
      type,
      title: titles[type],
      description: descriptions[type],
      date: new Date().toLocaleString(),
      read: false,
    });
  };

  return {
    notifications,
    addNotification,
    markAsRead,
    clearNotifications,
    unreadCount,
    simulatePush,
  };
};
