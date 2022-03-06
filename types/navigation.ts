import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import type { StackScreenProps } from "@react-navigation/stack";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export type Person = {
  name: string;
  known_from: string;
  catch_up_date: Date;
  uid: string;
};

export type HomeStackParamList = {
  Home: undefined;
  Person: Person;
  Login: undefined;
};

export type HomeStackScreenProps<T extends keyof HomeStackParamList> =
  StackScreenProps<HomeStackParamList, T>;

export type TabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  AddPerson: undefined;
  Settings: undefined;
};

export type TabScreenProps<T extends keyof TabParamList> = CompositeScreenProps<
  HomeStackScreenProps<keyof HomeStackParamList>,
  BottomTabScreenProps<TabParamList, T>
>;
