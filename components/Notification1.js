import React, { useState, useCallback } from "react";
import { View, Image, StyleSheet, Text, Pressable, Modal } from "react-native";
import Notification2 from "./Notification2";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Notification1 = ({ onClose }) => {
  const [frameContainer1Visible, setFrameContainer1Visible] = useState(false);

  const openFrameContainer1 = useCallback(() => {
    setFrameContainer1Visible(true);
  }, []);

  const closeFrameContainer1 = useCallback(() => {
    setFrameContainer1Visible(false);
  }, []);

  return (
    <>
      <View style={styles.notification}>
        <Image
          style={styles.arrowBackIosIcon}
          resizeMode="cover"
          source={require("../assets/arrow-back-ios.png")}
        />
        <Text style={styles.notification1}>Notification</Text>
        <View style={styles.frameParent}>
          <View style={[styles.groupParent, styles.groupFlexBox]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/group-5.png")}
            />
            <View style={styles.bananaParent}>
              <Text style={[styles.banana, styles.textTypo]}>
                Banana님이 회원님의 책에 요청을 보냈습니다.
              </Text>
              <Text style={[styles.minAgo, styles.textTypo]}>5 min ago</Text>
            </View>
            <Pressable
              style={[styles.wrapper, styles.groupFlexBox]}
              onPress={openFrameContainer1}
            >
              <Text style={[styles.text, styles.textTypo]}>요청 보기</Text>
            </Pressable>
          </View>
          <View style={[styles.groupContainer, styles.groupFlexBox]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/group-51.png")}
            />
            <View style={styles.bananaParent}>
              <Text style={[styles.banana, styles.textTypo]}>
                StarBerry님이 회원님의 책에 요청을 보냈습니다.
              </Text>
              <Text style={[styles.minAgo, styles.textTypo]}>20 min ago</Text>
            </View>
            <View style={[styles.wrapper, styles.groupFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>요청 보기</Text>
            </View>
          </View>
          <View style={[styles.groupContainer, styles.groupFlexBox]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/group-4.png")}
            />
            <View style={styles.bananaParent}>
              <Text
                style={[styles.banana, styles.textTypo]}
              >{`000000님이 회원님의 요청을 수락했습니다. `}</Text>
              <Text style={[styles.minAgo, styles.textTypo]}>1일 전</Text>
            </View>
            <View style={[styles.wrapper, styles.groupFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>메세지 보내기</Text>
            </View>
          </View>
          <View style={[styles.groupContainer, styles.groupFlexBox]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/group-4.png")}
            />
            <View style={styles.bananaParent}>
              <Text style={[styles.banana, styles.textTypo]}>
                000000님이 회원님의 요청을 거절했습니다.
              </Text>
              <Text style={[styles.minAgo, styles.textTypo]}>4일 전</Text>
            </View>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={frameContainer1Visible}>
        <View style={styles.frameContainer1Overlay}>
          <Pressable
            style={styles.frameContainer1Bg}
            onPress={closeFrameContainer1}
          />
          <Notification2 onClose={closeFrameContainer1} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  groupFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.subtitle03Bold,
    fontWeight: "700",
  },
  arrowBackIosIcon: {
    top: 24,
    left: 25,
    width: 24,
    height: 24,
    position: "absolute",
  },
  notification1: {
    marginLeft: -57,
    top: 26,
    left: "50%",
    fontSize: FontSize.heading02Bold_size,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.subtitle03Bold,
    fontWeight: "700",
    position: "absolute",
  },
  frameChild: {
    width: 55,
    height: 50,
  },
  banana: {
    fontSize: FontSize.subtitle02Regular_size,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    alignSelf: "stretch",
  },
  minAgo: {
    fontSize: FontSize.subtitle03Bold_size,
    color: Color.colorDarkgray_200,
    marginTop: 6,
    alignSelf: "stretch",
  },
  bananaParent: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 8,
  },
  frameContainer1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  text: {
    fontSize: FontSize.subtitle02Regular_size,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  wrapper: {
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.labelColorLightPrimary,
    borderWidth: 2,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_5xs,
    marginLeft: 8,
  },
  groupParent: {
    width: 320,
    flexDirection: "row",
  },
  groupContainer: {
    marginTop: 16,
    width: 320,
    flexDirection: "row",
  },
  frameParent: {
    top: 81,
    left: 20,
    position: "absolute",
  },
  notification: {
    backgroundColor: Color.systemBackgroundLightPrimary,
    width: 360,
    height: 640,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default Notification1;
