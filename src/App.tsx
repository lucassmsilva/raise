import React from "react";
import { SafeAreaView, View, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createBottomTabNavigator,
  BottomTabBar
} from "@react-navigation/bottom-tabs";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useDarkMode } from "./Hooks/theme";
import { BlurView } from "@react-native-community/blur";

function App(): JSX.Element {
  const [darkMode, _] = useDarkMode();

  const backgroundStyle = {
    flex: 1
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
            <BlurView
            blurType="light"
            blurAmount={1}
            reducedTransparencyFallbackColor="white"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: "transparent",
                elevation: 0
              }}>
                
              <BottomTabBar {...props} />
            </BlurView>
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
