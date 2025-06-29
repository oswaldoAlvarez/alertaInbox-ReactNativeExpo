import { Notification } from "./notification.types";

export const notificationMocks: Notification[] = [
  {
    id: "1",
    type: "alert",
    title: "Alerta importante",
    description: "Problema detectado en el sistema",
    date: "2025-06-27 14:20",
    read: false,
  },
  {
    id: "2",
    type: "message",
    title: "Nuevo mensaje",
    description: "Tienes un mensaje nuevo",
    date: "2025-06-27 12:15",
    read: false,
  },
  {
    id: "3",
    type: "update",
    title: "Actualización",
    description: "Tu-app esta actualizada",
    date: "2025-06-28 10:05",
    read: true,
  },
];
