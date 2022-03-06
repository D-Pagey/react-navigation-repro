import { FC } from "react";
import { Text, View } from "react-native";

import { TabScreenProps } from "../types/navigation";

type Props = TabScreenProps<"Settings">;

export const SettingsScreen: FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
};
