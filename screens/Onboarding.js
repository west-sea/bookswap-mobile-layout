import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, Border, FontSize } from "../GlobalStyles";

function Onboarding({navigation}) {
  //const navigation = useNavigation();

  return (
    <View style={styles.onboarding}>
      <View
        style={[
          styles.welcomeToBookswapLetMeKnWrapper,
          styles.profileParentPosition,
        ]}
      >
        <Text
          style={[styles.welcomeToBookswap, styles.profileTypo]}
        >{`Welcome to BookSwap!
Let me know about you.`}</Text>
      </View>
      <Pressable
        //style={[styles.profileParent, styles.profileParentPosition]}
        //onPress={() => navigation.navigate("Onboarding2")}
      >
        <Text style={[styles.profile, styles.profileTypo]}>Profile</Text>
        <View style={[styles.groupParent, styles.parentFlexBox]}>
          <View style={styles.groupChildLayout}>
            <View style={[styles.groupChild, styles.groupChildPosition]} />
            <View style={[styles.xl64Profile, styles.groupChildLayout]}>
              <View style={[styles.circle, styles.circlePosition]} />
              <Text style={[styles.text, styles.textTypo]}>🎃</Text>
            </View>
          </View>
          <View style={[styles.xl64Profile1, styles.frameChildLayout]}>
            <View style={[styles.circle1, styles.circlePosition]} />
            <Text style={[styles.text, styles.textTypo]}>🐶</Text>
          </View>
          <View style={[styles.xl64Profile1, styles.frameChildLayout]}>
            <View style={[styles.circle2, styles.circlePosition]} />
            <Text style={[styles.text2, styles.textTypo]}>🌈</Text>
          </View>
          <Image
            style={styles.frameChildLayout}
            resizeMode="cover"
            source={require("../assets/group-20.png")}
          />
        </View>
        <View style={styles.parentFlexBox}>
          <Text style={[styles.profile, styles.profileTypo]}>Nickname</Text>
          <View style={[styles.input, styles.inputFlexBox]}>
            <Text style={[styles.input1, styles.input1Typo]} />
          </View>
        </View>
      </Pressable>
      <View style={[styles.buttonLgWrapper, styles.groupChildPosition]}>
        <View style={[styles.buttonLg, styles.inputFlexBox]}>
          <Text style={[styles.button, styles.input1Typo]}>Complete</Text>
        </View>
        <Button 
                title="go to main" 
                onPress={() => navigation.navigate('Main')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileParentPosition: {
    paddingHorizontal: Padding.p_xl,
    width: 360,
    left: 0,
    position: "absolute",
  },
  profileTypo: {
    textAlign: "center",
    color: Color.iconOnLightActive,
    fontFamily: FontFamily.subtitle03Bold,
    fontWeight: "700",
  },
  parentFlexBox: {
    marginTop: 20,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  groupChildPosition: {
    bottom: 0,
    position: "absolute",
  },
  groupChildLayout: {
    height: 64,
    width: 64,
  },
  circlePosition: {
    borderRadius: Border.br_181xl,
    left: "7.81%",
    bottom: "7.81%",
    right: "7.81%",
    top: "7.81%",
    width: "84.38%",
    height: "84.38%",
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.subtitle02Regular,
    fontWeight: "500",
    fontSize: FontSize.size_21xl,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  frameChildLayout: {
    marginLeft: 10,
    height: 64,
    width: 64,
  },
  inputFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  input1Typo: {
    color: Color.iconOnLightDisable,
    textAlign: "left",
    fontFamily: FontFamily.subtitle02Regular,
    fontWeight: "500",
  },
  welcomeToBookswap: {
    fontSize: FontSize.heading02Bold_size,
    lineHeight: 30,
  },
  welcomeToBookswapLetMeKnWrapper: {
    top: 60,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Padding.p_xl,
    flexDirection: "row",
  },
  profile: {
    fontSize: FontSize.subtitle03Bold_size,
    lineHeight: 18,
  },
  groupChild: {
    right: 0,
    borderRadius: Border.br_13xl,
    backgroundColor: Color.container100,
    height: 64,
    width: 64,
  },
  circle: {
    backgroundColor: Color.colorGoldenrod,
  },
  text: {
    marginTop: -20,
    marginLeft: -20,
  },
  xl64Profile: {
    top: 0,
    left: 0,
    position: "absolute",
    width: 64,
    overflow: "hidden",
  },
  circle1: {
    backgroundColor: Color.colorYellowgreen,
  },
  xl64Profile1: {
    opacity: 0.4,
    overflow: "hidden",
  },
  circle2: {
    backgroundColor: Color.colorGray_100,
  },
  text2: {
    marginTop: -19,
    marginLeft: -19,
  },
  groupParent: {
    flexDirection: "row",
    marginTop: 20,
  },
  input1: {
    fontSize: FontSize.subtitle02Regular_size,
    lineHeight: 21,
    flex: 1,
  },
  input: {
    borderRadius: Border.br_mini,
    borderStyle: "solid",
    borderColor: Color.container200,
    borderWidth: 1,
    height: 30,
    paddingLeft: Padding.p_xs,
    paddingRight: Padding.p_7xs,
    marginTop: 10,
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
  profileParent: {
    top: 150,
    paddingVertical: 0,
  },
  button: {
    fontSize: FontSize.subtitle01Regular_size,
    lineHeight: 24,
  },
  buttonLg: {
    borderRadius: Border.br_xl,
    height: 40,
    padding: Padding.p_3xs,
    backgroundColor: Color.container100,
    justifyContent: "center",
  },
  buttonLgWrapper: {
    padding: Padding.p_xl,
    width: 360,
    bottom: 0,
    left: 0,
  },
  onboarding: {
    width: "100%",
    height: 640,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
});

export default Onboarding;
