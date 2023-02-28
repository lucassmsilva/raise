import React, { PropsWithChildren } from "react";
import Animated, { Layout, FadeIn, FadeOut } from "react-native-reanimated";

interface AnimatedProps {
  delay?: number;
  style?: Object;
}

export const AnimatedView = ({
  children,
  delay = 300,
  style = {
    flex: 1
  }
}: PropsWithChildren<AnimatedProps>) => {
  return (
    <Animated.View
      entering={FadeIn.duration(delay)}
      exiting={FadeOut}
      layout={Layout.delay(100)}
      style={style}>
      {children}
    </Animated.View>
  );
};
