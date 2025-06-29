export type NotificationType = "alert" | "message" | "update";

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  description: string;
  date: string;
  read: boolean;
}

export type NotificationCategory = "all" | "alert" | "message" | "update";
