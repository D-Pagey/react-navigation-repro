import { FC } from "react";
import { Text, View } from "react-native";

import { TabScreenProps } from "../types/navigation";

type Props = TabScreenProps<"AddPerson">;

export const AddPersonScreen: FC<Props> = ({ navigation }) => {
  // this is typed to any when it should be an option of screens to navigate to
  const navigate = () => navigation.navigate("HomeStack", { screen: "Home" });

  return (
    <View>
      <Text>This is the issue page</Text>
    </View>
  );
};
