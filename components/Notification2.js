import * as React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Notification2 = ({ onClose }) => {
  return (
    <View style={styles.notification}>
      <View style={styles.notificationChild} />
      <Image
        style={styles.arrowBackIosIcon}
        resizeMode="cover"
        source={require("../assets/arrow-back-ios.png")}
      />
      <Text style={styles.request}>Request</Text>
      <View style={styles.frameParent}>
        <View style={styles.groupFlexBox}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-3.png")}
          />
          <View style={styles.bananaParent}>
            <Text style={[styles.banana, styles.bananaTypo]}>Banana</Text>
            <Text style={styles.minAgo}>5 min ago</Text>
          </View>
          <View style={[styles.acceptWrapper, styles.wrapperBorder]}>
            <Text style={[styles.accept, styles.bananaTypo]}>Accept</Text>
          </View>
        </View>
        <View style={[styles.groupContainer, styles.groupFlexBox]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-3.png")}
          />
          <View style={styles.bananaParent}>
            <Text style={[styles.banana, styles.bananaTypo]}>Starberry</Text>
            <Text style={styles.minAgo}>20 min ago</Text>
          </View>
          <View style={[styles.acceptWrapper, styles.wrapperBorder]}>
            <Text style={[styles.accept, styles.bananaTypo]}>Accept</Text>
          </View>
        </View>
      </View>
      <View style={styles.rectangleParent}>
        <Image
          style={styles.frameInner}
          resizeMode="cover"
          source={require("../assets/rectangle-4.png")}
        />
        <View style={styles.frameGroup}>
          <View>
            <View>
              <Text style={[styles.meBeforeYou, styles.bananaTypo]}>
                Me Before You
              </Text>
              <Text style={[styles.jojoMoyes, styles.textTypo]}>
                JoJo Moyes
              </Text>
              <Text style={[styles.text, styles.textTypo]}>04/06</Text>
            </View>
          </View>
          <View style={[styles.requestsWrapper, styles.wrapperBorder]}>
            <Text style={styles.requests}>1 Requests</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bananaTypo: {
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.subtitle03Bold,
    fontWeight: "700",
  },
  wrapperBorder: {
    borderColor: Color.labelColorLightPrimary,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
  },
  groupFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    width: 320,
  },
  textTypo: {
    marginTop: 7,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.subtitle03Bold_size,
    textAlign: "left",
  },
  notificationChild: {
    marginLeft: -180,
    top: 62,
    backgroundColor: "#f1f1f1",
    height: 138,
    left: "50%",
    position: "absolute",
    width: 360,
  },
  arrowBackIosIcon: {
    top: 24,
    left: 25,
    width: 24,
    height: 24,
    position: "absolute",
  },
  request: {
    marginLeft: -40,
    top: 26,
    fontSize: FontSize.heading02Bold_size,
    textAlign: "center",
    fontFamily: FontFamily.subtitle03Bold,
    fontWeight: "700",
    color: Color.labelColorLightPrimary,
    left: "50%",
    position: "absolute",
  },
  frameChild: {
    width: 40,
    height: 40,
  },
  banana: {
    fontSize: FontSize.subtitle02Regular_size,
    textAlign: "left",
    alignSelf: "stretch",
  },
  minAgo: {
    fontWeight: "500",
    fontFamily: FontFamily.subtitle02Regular,
    color: Color.colorDarkgray_200,
    marginTop: 6,
    fontSize: FontSize.subtitle03Bold_size,
    textAlign: "left",
    alignSelf: "stretch",
  },
  bananaParent: {
    flex: 1,
    marginLeft: 8,
    justifyContent: "center",
  },
  accept: {
    fontSize: FontSize.subtitle02Regular_size,
    textAlign: "left",
  },
  acceptWrapper: {
    borderRadius: Border.br_3xs,
    borderWidth: 2,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_5xs,
    marginLeft: 8,
  },
  groupContainer: {
    marginTop: 16,
  },
  frameParent: {
    top: 220,
    left: 20,
    position: "absolute",
  },
  frameInner: {
    width: 86,
    height: 114,
  },
  meBeforeYou: {
    fontSize: FontSize.subtitle01Regular_size,
  },
  jojoMoyes: {
    color: Color.labelColorLightPrimary,
    marginTop: 7,
  },
  text: {
    color: Color.colorGray,
  },
  requests: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.subtitle03Bold_size,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
  },
  requestsWrapper: {
    borderRadius: Border.br_9xs,
    borderWidth: 1,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_7xs,
    justifyContent: "center",
  },
  frameGroup: {
    justifyContent: "space-between",
    marginLeft: 13,
    alignSelf: "stretch",
  },
  rectangleParent: {
    top: 72,
    flexDirection: "row",
    width: 320,
    left: 20,
    position: "absolute",
  },
  notification: {
    backgroundColor: Color.systemBackgroundLightPrimary,
    height: 640,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
    width: 360,
  },
});

export default Notification2;
