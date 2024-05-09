import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function Splash({navigation}) {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Start')}>
    <LinearGradient
      style={styles.splashScreen}
      locations={[0, 1]}
      colors={["#119b86", "#40b250"]}
    >
      <View style={styles.logoSymbolParent}>
        <Image
          style={styles.logoSymbol}
          contentFit="cover"
          source={require("../assets/logo--symbol.png")}
        />
        <Image
          style={styles.logoType}
          contentFit="cover"
          source={require("../assets/logo--type.png")}
        />
      </View>
    </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  logoSymbol: {
    width: 160,
    height: 160,
    overflow: "hidden",
  },
  logoType: {
    width: 240,
    height: 80,
    overflow: "hidden",
  },
  logoSymbolParent: {
    position: "absolute",
    marginTop: -120,
    marginLeft: -120,
    top: "50%",
    left: "50%",
    alignItems: "center",
  },
  splashScreen: {
    flex: 1,
    width: "100%",
    height: 640,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default Splash;
