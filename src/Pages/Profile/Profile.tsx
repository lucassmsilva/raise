import React, { useState } from "react";
import { View, Animated } from "react-native";
import { Switch } from "react-native-paper";
import { useDarkMode, getTheme } from "../../Hooks/theme";
import { AnimatedBackground } from "../../Components/Animated/AnimatedBackground";
import { TextDefault } from "../../Layout/Typography";
import { Cabecalho, Container } from "../../Layout/Views";

const Profile = () => {
  const [dark, toggleDarkMode] = useDarkMode();
  const theme = getTheme(dark);

  return (
    <AnimatedBackground>
      <Cabecalho titulo='Perfil' theme={theme}></Cabecalho>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 16,
          justifyContent: "space-between"
        }}>
        <TextDefault theme={theme}>MODO DARK</TextDefault>
        <Switch
          value={dark}
          onValueChange={() => toggleDarkMode()}></Switch>
      </View>
    </AnimatedBackground>
  );
};
export default Profile;
