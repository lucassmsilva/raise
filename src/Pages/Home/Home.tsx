import React, { useState } from "react";
import { View } from "react-native";
import { useDarkMode } from "../../Hooks/theme";
import { Cabecalho, Container } from "../../Layout/Views";
import { Button, TextInput } from "react-native-paper";
import { useList } from "../../Hooks/useList";
import { TextDefault } from "../../Layout/Typography";
import { getColors } from "../../Layout/Colors";
import { AnimatedView } from "../../Components/Animated/AnimatedView";

const Home = () => {
  const [isDarkMode, _] = useDarkMode();
  const theme = isDarkMode ? "dark" : "light";
  const [text, setText] = useState("");
  const [list, listActions] = useList([]);

  return (
    <Container theme={theme}>
      <Cabecalho titulo='Seja bem vindo' theme={theme}>
        <></>
      </Cabecalho>
      <View
        style={{
          marginTop: 16,
          backgroundColor: getColors("light").primaryColor
        }}>
        <TextInput
          mode='outlined'
          label={"To-do"}
          value={text}
          onChangeText={e => setText(e)}></TextInput>
        <View
          style={{
            flexDirection: "row",
            marginVertical: 12,
            justifyContent: "space-around"
          }}>
          <Button
            mode='outlined'
            onPress={() => listActions.pushItem(text)}>
            Adicionar ao fim
          </Button>
          <Button
            mode='outlined'
            onPress={() => {
              listActions.addItem(text);
              setText("");
            }}>
            Adicionar começo
          </Button>
        </View>
      </View>

      {list.length > 0 &&
        list.map((item, index) => (
          <AnimatedView
            key={index}
            style={{
              flexDirection: "row",
              padding: 4,
              alignItems: "center",
              justifyContent: "space-between"
            }}>
            <TextDefault theme={theme}>{item}</TextDefault>
            <Button onPress={() => listActions.removeItem(index)}>
              EXCLUIR
            </Button>
          </AnimatedView>
        ))}
    </Container>
  );
};

export default Home;
