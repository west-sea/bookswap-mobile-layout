import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, Dimensions } from "react-native";
import { Border, FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Notification1 = () => {
  return (
    <View style={styles.notification}>
      <View style={styles.instanceParent}>
        <View style={[styles.groupParent, styles.barFlexBox]}>
          <View style={styles.bookImgParent}>
            <View style={[styles.bookImg, styles.barPosition]}>
              <Image
                style={[styles.image2Icon, styles.image2IconPosition]}
                contentFit="cover"
                source={require("../assets/image-2.png")}
              />
              <View style={[styles.bookImgChild, styles.image2IconPosition]} />
            </View>
            <View style={[styles.lg32Profile, styles.lg32Layout]}>
              <View style={[styles.circle, styles.circlePosition]} />
              <Text style={[styles.text, styles.textTypo]}>🏀</Text>
            </View>
          </View>
          <View style={styles.bananaSentARequestToYourParent}>
            <Text style={styles.bananaContainerFlexBox}>
              <Text style={[styles.healthyBoy, styles.okTypo]}>
                Healthy Boy
              </Text>
              <Text style={[styles.acceptedYourRequest, styles.okLayout]}>
                {" "}
                accepted your request.
              </Text>
            </Text>
            <Text style={[styles.minAgo, styles.okLayout]}>19 min ago</Text>
          </View>
          <Image
            style={styles.instanceChild}
            contentFit="cover"
            source={require("../assets/ellipse-6.png")}
          />
          <Pressable
            style={[styles.lg32ArrowRight, styles.lg32Layout]}
            onPress={() => {}}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/arrow_right.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.groupParent, styles.barFlexBox]}>
          <View style={styles.bookImgParent}>
            <View style={[styles.bookImg, styles.barPosition]}>
              <Image
                style={[styles.image2Icon, styles.image2IconPosition]}
                contentFit="cover"
                source={require("../assets/image-3.png")}
              />
              <View style={[styles.bookImgChild, styles.image2IconPosition]} />
            </View>
            <View style={[styles.lg32Profile, styles.lg32Layout]}>
              <View style={[styles.circle1, styles.circlePosition]} />
              <Text style={[styles.text, styles.textTypo]}>🎃</Text>
            </View>
          </View>
          <View style={styles.bananaSentARequestToYourParent}>
            <Text style={[styles.bananaSentAContainer1, styles.okLayout]}>
              <Text style={styles.okTypo}>Pum King</Text>
              <Text style={styles.acceptedTypo}>
                {" "}
                accepted someone else's request.
              </Text>
            </Text>
            <Text style={[styles.minAgo, styles.okLayout]}>19 min ago</Text>
          </View>
          <Image
            style={styles.instanceChild}
            contentFit="cover"
            source={require("../assets/ellipse-6.png")}
          />
          <Image
            style={[styles.lg32ArrowRight1, styles.lg32Layout]}
            contentFit="cover"
            source={require("../assets/arrow_right.png")}
          />
        </View>
        <View style={[styles.groupParent, styles.barFlexBox]}>
          <View style={styles.bookImgParent}>
            <View style={[styles.bookImg, styles.barPosition]}>
              
              
              
              
              
              <View style={[styles.bookImgChild, styles.image2IconPosition]} />
            </View>
            <View style={[styles.lg32Profile, styles.lg32Layout]}>
              <View style={[styles.circle2, styles.circlePosition]} />
              <Text style={[styles.text2, styles.textTypo]}>🐶</Text>
            </View>
          </View>
          <View style={styles.bananaSentARequestToYourParent}>
            <Text style={[styles.bananaSentAContainer1, styles.okLayout]}>
              <Text style={styles.okTypo}>Hot Dog</Text>
              <Text style={styles.acceptedTypo}>{` `}</Text>
              <Text style={styles.sentARequest}>
                sent a request to your book.
              </Text>
            </Text>
            <Text style={[styles.minAgo, styles.okLayout]}>2 days ago</Text>
          </View>
          <Image
            style={styles.instanceChild}
            contentFit="cover"
            source={require("../assets/ellipse-6.png")}
          />
          <Image
            style={[styles.lg32ArrowRight, styles.lg32Layout]}
            contentFit="cover"
            source={require("../assets/arrow_right.png")}
          />
        </View>
      </View>
      <View style={[styles.bar, styles.barPosition]}>
        <Image
          style={styles.md24ArrowLeft}
          contentFit="cover"
          source={require("../assets/arrow_right.png")}
        />
        <View style={styles.barChild} />
        <View style={[styles.okWrapper, styles.barFlexBox]}>
          <Text style={[styles.ok, styles.okLayout]}>OK</Text>
        </View>
        <Text style={[styles.title, styles.okTypo]}>Notification</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  barFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  barPosition: {
    top: 0,
    height: 60,
    left: 0,
    position: "absolute",
  },
  image2IconPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  lg32Layout: {
    height: 32,
    width: 32,
  },
  circlePosition: {
    borderRadius: Border.br_181xl,
    left: "8.33%",
    bottom: "8.23%",
    right: "8.23%",
    top: "8.33%",
    width: "83.44%",
    height: "83.44%",
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.subtitle03Regular,
    fontWeight: "500",
  },
  okTypo: {
    fontFamily: FontFamily.heading02Bold,
    fontWeight: "700",
  },
  okLayout: {
    lineHeight: 18,
    fontSize: FontSize.subtitle03Bold_size,
  },
  image2Icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  bookImgChild: {
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderWidth: 1,
  },
  bookImg: {
    width: 40,
  },
  circle: {
    backgroundColor: Color.colorChocolate,
  },
  text: {
    marginTop: -10,
    color: Color.colorBlack,
    fontSize: FontSize.heading02Bold_size,
    left: "50%",
    position: "absolute",
    marginLeft: -10,
    textAlign: "left",
    top: "50%",
  },
  lg32Profile: {
    marginTop: -16,
    left: 24,
    top: "50%",
    height: 32,
    width: 32,
    position: "absolute",
    overflow: "hidden",
  },
  bookImgParent: {
    width: 56,
    height: 60,
  },
  healthyBoy: {
    fontSize: 14,
  },
  acceptedYourRequest: {
    fontFamily: FontFamily.subtitle03Regular,
    fontWeight: "500",
  },
  bananaContainerFlexBox: {
    color: Color.iconOnLightActive,
    textAlign: "left",
    alignSelf: "stretch",
  },
  minAgo: {
    color: Color.iconOnLightEnable,
    marginTop: 6,
    textAlign: "left",
    fontFamily: FontFamily.subtitle03Regular,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  bananaSentARequestToYourParent: {
    justifyContent: "center",
    marginLeft: 6,
    flex: 1,
  },
  instanceChild: {
    width: 8,
    height: 8,
    display: "none",
    marginLeft: 6,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  lg32ArrowRight: {
    marginLeft: 6,
  },
  groupParent: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_5xs,
    alignSelf: "stretch",
    backgroundColor: Color.containerWhite,
  },
  circle1: {
    backgroundColor: Color.colorGoldenrod,
  },
  acceptedTypo: {
    fontFamily: FontFamily.subtitle03Regular,
    fontWeight: "500",
  },
  bananaSentAContainer1: {
    color: Color.iconOnLightActive,
    textAlign: "left",
    alignSelf: "stretch",
  },
  lg32ArrowRight1: {
    display: "none",
    marginLeft: 6,
  },
  circle2: {
    backgroundColor: Color.colorYellowgreen,
  },
  text2: {
    marginTop: -11,
    color: Color.colorBlack,
    fontSize: FontSize.heading02Bold_size,
    left: "50%",
    position: "absolute",
    marginLeft: -10,
    textAlign: "left",
    top: "50%",
  },
  sentARequest: {
    fontFamily: FontFamily.interRegular,
  },
  instanceParent: {
    top: 60,
    width: 360,
    left: 0,
    position: "absolute",
  },
  md24ArrowLeft: {
    width: 24,
    height: 24,
    zIndex: 0,
    display: "none",
  },
  barChild: {
    zIndex: 1,
    alignSelf: "stretch",
    flex: 1,
    backgroundColor: Color.containerWhite,
  },
  ok: {
    color: Color.brandGreenDark,
    textAlign: "right",
    fontFamily: FontFamily.heading02Bold,
    fontWeight: "700",
  },
  okWrapper: {
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_3xs,
    zIndex: 2,
    display: "none",
  },
  title: {
    marginLeft: -57,
    top: 18,
    lineHeight: 30,
    textAlign: "center",
    zIndex: 3,
    color: Color.colorBlack,
    fontSize: FontSize.heading02Bold_size,
    left: "50%",
    position: "absolute",
  },
  bar: {
    justifyContent: "space-between",
    paddingLeft: Padding.p_3xs,
    paddingRight: Padding.p_mini,
    alignItems: "center",
    flexDirection: "row",
    width: 360,
    backgroundColor: Color.containerWhite,
  },
  notification: {
    height: 640,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    marginTop: screenHeight*0.03,
    backgroundColor: Color.containerWhite,
  },
});

export default Notification1;
