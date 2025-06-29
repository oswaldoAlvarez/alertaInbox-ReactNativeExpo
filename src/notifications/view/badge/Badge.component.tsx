import { TextView } from "@/src/shared/ui/textView/TextView.component";
import React from "react";
import { View } from "react-native";
import { styles } from "./Badge.styles";

type IBadge = {
  count: number;
};

export const Badge = ({ count }: IBadge) => {
  if (count === 0) return null;

  return (
    <View style={styles.container}>
      <TextView textStyles={styles.count}>{count}</TextView>
    </View>
  );
};
