import React from "react";
import { View } from "react-native";
import { useDarkMode } from "../../Hooks/theme";
import { PageTitle } from "../../Layout/Typography";
import { Cabecalho, Container } from "../../Layout/Views";

const Home = () => {
  const [isDarkMode, _] = useDarkMode();
  const theme = isDarkMode ? "dark" : "light";
  return (
    <Container theme={theme}>
      <Cabecalho titulo='Seja bem vindo' theme={theme}>
        <></>
      </Cabecalho>
    </Container>
  );
};

export default Home;
