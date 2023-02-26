import React from "react";
import { SafeAreaView, View, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createBottomTabNavigator,
  BottomTabBar
} from "@react-navigation/bottom-tabs";
import Home from "./src/Pages/Home/Home";
import Profile from "./src/Pages/Profile/Profile";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? "#0f172a" : "#fafaf9"
  };

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <SafeAreaView style={backgroundStyle}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: "transparent", elevation: 0 }
          }}
          tabBar={props => (
            <View
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: "transparent",
                elevation: 0
              }}>
              <BottomTabBar {...props} />
            </View>
          )}>
          <Tab.Screen
            name='Home'
            component={Home}
            options={{
              tabBarIcon: ({ color }) => {
                return <FontAwesome5 name='home' color={color} size={20} />;
              }
            }}
          />
          <Tab.Screen
            name='Profile'
            component={Profile}
            options={{
              tabBarIcon: ({ color }) => {
                return (
                  <FontAwesome5
                    name='user-secret'
                    color={color}
                    size={20}
                  />
                );
              }
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
