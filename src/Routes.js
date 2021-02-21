import React, { useState, useEffect, useContext } from "react";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
import { Center } from "./Center";
import { AuthContext } from "./AuthProvider.js";
import { AppTabs } from "./AppTabs";
import { AuthStack } from "./AuthStack";
import AsyncStorage from "@react-native-community/async-storage"


export const Routes = ({}) => {
  const { user, login } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // check if the user is logged in or not
    AsyncStorage.getItem("user")
      .then(userString => {
        if (userString) {
          // decode it
          login();
        }
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    );
  }

  return (
    <NavigationContainer>
      {user ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};
