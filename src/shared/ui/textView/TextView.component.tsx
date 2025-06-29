import { useThemeToggle } from "@/src/theme/ThemeContext";
import { PropsWithChildren } from "react";
import { Text, TextProps, TextStyle, View, ViewStyle } from "react-native";
import { styles } from "./TextView.styles";

type alignContentType = "center" | "flex-start" | "flex-end";

interface ITextView extends PropsWithChildren<TextProps> {
  contentStyles?: ViewStyle | ViewStyle[];
  textStyles?: TextStyle | TextStyle[];
  align?: alignContentType;
}

export const TextView = ({
  children,
  contentStyles,
  textStyles,
  align,
  ...textProps
}: ITextView) => {
  const { colors } = useThemeToggle();

  return (
    <View style={[contentStyles, { alignSelf: align }]}>
      <Text
        style={[styles.defaultText, { color: colors.text }, textStyles]}
        {...textProps}
      >
        {children}
      </Text>
    </View>
  );
};
