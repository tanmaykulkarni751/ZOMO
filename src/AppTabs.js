import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons, EvilIcons } from "@expo/vector-icons";
import { HomeStack } from "./HomeStack";
import { ClassesStack } from "./ClassesStack";

const Tabs = createBottomTabNavigator();

export const AppTabs = ({}) => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
            return <AntDesign name={"home"} size={size} color={color} />;
          } else if (route.name === "Classes") {
            return <AntDesign name={"laptop"} size={size} color={color} />;
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray"
      }}
    >
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="Classes" component={ClassesStack} />
    </Tabs.Navigator>
  );
};
