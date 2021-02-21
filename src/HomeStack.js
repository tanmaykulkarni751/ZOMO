import React, { useContext, useRef, useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Center } from "./Center";
import { Text, TouchableOpacity, FlatList, Button } from "react-native";
import { AuthContext } from "./AuthProvider";
import { db } from "../App";
import firebase from 'firebase'

const Stack = createStackNavigator();

function Feed({ navigation }) {
  // Ishaan: console.log the distance between two timestamps
  const [meetings, setMeetings] = useState();

  useEffect(() => {
    fetchMeetings();
  }, []);

  // console.log(`db is ${db}`)

  const fetchMeetings = async () => {
    const response = db.collection("meeting");
    const data = await response.get();
    console.log(data)
    data.docs.forEach((item) => {
      console.log(item)
      setMeetings([...meetings, item.data()]);
    });
  };

  console.log(`meetings are: ${meetings}`)

  return (
    <Center>
      <Text>Hello</Text>
    </Center>
  );
}

export const HomeStack = ({}) => {
  const { logout } = useContext(AuthContext);
  return (
    <Stack.Navigator initialRouteName="Feed">
      <Stack.Screen
        name="Feed"
        options={{
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  logout();
                }}
              >
                <Text>LOGOUT</Text>
              </TouchableOpacity>
            );
          },
        }}
        component={Feed}
      />
    </Stack.Navigator>
  );
};
