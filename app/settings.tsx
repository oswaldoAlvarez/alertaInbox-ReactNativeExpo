import { MainContainer } from "@/src/shared/ui/mainContainer/MainContainer.component";
import { TextView } from "@/src/shared/ui/textView/TextView.component";
import { ThemeToggleSwitch } from "@/src/shared/ui/themeToggleSwitch/ThemeToggleSwitch.component";
import { View } from "react-native";

export default function SettingsScreen() {
  return (
    <MainContainer>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextView
          textStyles={{
            fontSize: 14,
            marginRight: 6,
          }}
        >
          {"dark_mode: "}
        </TextView>
        <ThemeToggleSwitch />
      </View>
    </MainContainer>
  );
}
