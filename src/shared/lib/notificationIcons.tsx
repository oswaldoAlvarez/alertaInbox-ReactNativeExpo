import { Ionicons } from "@expo/vector-icons";

const ICON_SIZE = 28;

export const iconByType = {
  alert: <Ionicons name="alert-circle" size={ICON_SIZE} color="#e98d24" />,
  message: (
    <Ionicons name="chatbubble-ellipses" size={ICON_SIZE} color="#229955" />
  ),
  update: (
    <Ionicons name="information-circle" size={ICON_SIZE} color="#3a7bff" />
  ),
};
