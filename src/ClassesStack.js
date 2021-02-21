import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native";
import { Center } from "./Center";

const Stack = createStackNavigator();

function Classes({ navigation }) {
  return (
    <Center>
      <Button
        title="Classes"
      />
    </Center>
  );
}

export const ClassesStack = ({}) => {
  return (
    <Stack.Navigator initialRouteName="Classes">
      <Stack.Screen name="Classes" component={Classes} />
    </Stack.Navigator>
  );
};
