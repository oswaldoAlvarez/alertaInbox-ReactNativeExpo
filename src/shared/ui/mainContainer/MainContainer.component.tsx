import { useThemeToggle } from "@/src/theme/ThemeContext";
import { PropsWithChildren } from "react";
import { SafeAreaView, View, ViewStyle } from "react-native";
import { styles } from "./MainContainer.styles";

interface IMainContainer extends PropsWithChildren {
  viewStyles?: ViewStyle | ViewStyle[];
}

export const MainContainer = ({ children, viewStyles }: IMainContainer) => {
  const { colors } = useThemeToggle();

  return (
    <View
      style={[
        styles.viewContainer,
        colors && { backgroundColor: colors.background },
        viewStyles,
      ]}
    >
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </View>
  );
};
