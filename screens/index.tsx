import { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeStackParamList, TabParamList } from "../types/navigation";

import { AddPersonScreen } from "./AddPersonScreen";
import { SettingsScreen } from "./SettingsScreen";
import { HomeScreen } from "./HomeScreen";

const Tab = createBottomTabNavigator<TabParamList>();
const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export const Screens: FC = () => {
  const HomeStackScreen = () => (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );

  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="HomeStack"
    >
      <Tab.Screen name="HomeStack" component={HomeStackScreen} />
      <Tab.Screen name="AddPerson" component={AddPersonScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
