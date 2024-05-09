import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Padding, FontSize, FontFamily, Color } from "../GlobalStyles";

function Welcome({navigation}) {
  return (
    <Pressable 
      style={styles.frameParent}
      onPress={() => navigation.navigate('Home')}
    >
      <View style={[styles.notopartyPopperParent, styles.parentSpaceBlock]}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/notopartypopper.png")}
        />
        <Image
          style={[styles.notosmilingFaceWithOpenHaIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/notosmilingfacewithopenhands.png")}
        />
        <Image
          style={[styles.notosmilingFaceWithOpenHaIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/notopartypopper.png")}
        />
      </View>
      <Text style={styles.welcomeToBookswap}>Welcome to BookSwap!</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  frameParent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#28A66B'
  },
  parentSpaceBlock: {
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_21xl,
    justifyContent: "center",
    alignItems: "center",
    width: 360,
  },
  iconLayout: {
    height: 40,
    width: 40,
    overflow: "hidden",
  },
  notosmilingFaceWithOpenHaIcon: {
    marginLeft: 5,
  },
  notopartyPopperParent: {
    flexDirection: "row",
  },
  welcomeToBookswap: {
    fontSize: FontSize.heading02Bold_size,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: FontFamily.heading02Bold,
    //color: Color.iconOnDarkActive,
    color: "white",
    textAlign: "center",
    marginTop: 20,
  },
  frameParent: {
    position: "absolute",
    marginTop: -100,
    marginLeft: -180,
    top: "50%",
    left: "50%",
  },
  welcome: {
    flex: 1,
    width: "100%",
    height: 640,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default Welcome;
