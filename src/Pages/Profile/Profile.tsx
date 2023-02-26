import React, { useState } from "react";
import { View } from "react-native";
import { Button, Switch } from "react-native-paper";
import { TextDefault } from "../../Layout/Typography";

const Profile = () => {
  const [dark, setDark] = useState<Boolean>(false);

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 8
      }}>
      <TextDefault> DARK MODE</TextDefault>
      <Switch
        value={dark}
        onValueChange={() => setDark(prevState => !prevState)}></Switch>
    </View>
  );
};
export default Profile;
