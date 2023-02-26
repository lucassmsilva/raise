import React from "react";
import { View } from "react-native";
import { PageTitle } from "../../Layout/Typography";

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}>
      <PageTitle>Que haja luz!</PageTitle>
    </View>
  );
};

export default Home;
