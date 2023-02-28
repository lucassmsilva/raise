import React, { useState, useEffect } from "react";
import { Animated } from "react-native";
import { useDarkMode } from "../../Hooks/theme";
import { getColors } from "../../Layout/Colors";

interface AnimatedProps {
  children: React.ReactNode;
}

export const AnimatedBackground = ({ children }: AnimatedProps) => {
  const [dark, _] = useDarkMode();
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const toLight = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false
    }).start();
  };

  const toDark = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: false
    }).start();
  };

  useEffect(() => {
    if (dark == 1) {
      toDark();
    } else {
      toLight();
    }
  }, [dark]);

  const boxInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [
      getColors("dark").primaryColor,
      getColors("light").primaryColor
    ]
  });

  const animatedStyle = {
    backgroundColor: boxInterpolation
  };

  return (
    <Animated.View
      style={{
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 4,
        ...animatedStyle
      }}>
      {children}
    </Animated.View>
  );
};
