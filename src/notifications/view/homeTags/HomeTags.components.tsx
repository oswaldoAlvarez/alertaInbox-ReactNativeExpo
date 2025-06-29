import { Tag } from "@/src/shared/ui/tag/Tag.component";
import { useThemeToggle } from "@/src/theme/ThemeContext";
import { ScrollView } from "react-native";
import { NotificationCategory } from "../../model/notification.types";
import { styles } from "./HomeTags.styles";

interface IHomeTags {
  active: NotificationCategory;
  setCategory: (cat: NotificationCategory) => void;
}

export const HomeTags = ({ active, setCategory }: IHomeTags) => {
  const { colors } = useThemeToggle();

  const tagConfigs = [
    {
      key: "all",
      label: "Todos",
      onPress: () => setCategory("all"),
      active: active === "all",
    },
    {
      key: "alert",
      label: "Alertas",
      onPress: () => setCategory("alert"),
      active: active === "alert",
    },
    {
      key: "message",
      label: "Mensajes",
      onPress: () => setCategory("message"),
      active: active === "message",
    },
    {
      key: "update",
      label: "Actualizaciones",
      onPress: () => setCategory("update"),
      active: active === "update",
    },
  ];

  return (
    <ScrollView
      horizontal
      style={styles.tagContainer}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingVertical: 6 }}
    >
      {tagConfigs.map(({ key, label, onPress, active }) => (
        <Tag
          key={key}
          label={label}
          onPress={onPress}
          containerStyle={[
            styles.tag,
            active
              ? {
                  backgroundColor: colors.primary,
                  borderColor: colors.primary,
                }
              : {},
          ]}
          textStyle={{
            color: active ? "#fff" : colors.text,
            fontWeight: active ? "bold" : "normal",
          }}
        />
      ))}
    </ScrollView>
  );
};
