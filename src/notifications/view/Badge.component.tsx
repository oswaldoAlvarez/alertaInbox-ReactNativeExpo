import React from "react";
import { Text, View } from "react-native";

type IBadge = {
  count: number;
};

export const Badge = ({ count }: IBadge) => {
  if (count === 0) return null;
  return (
    <View
      style={{
        backgroundColor: "#ed4848",
        borderRadius: 10,
        paddingHorizontal: 6,
        paddingVertical: 2,
        alignItems: "center",
        justifyContent: "center",
        minWidth: 20,
      }}
    >
      <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 12 }}>
        {count}
      </Text>
    </View>
  );
};
