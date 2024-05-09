import React, { useState, useCallback } from "react";
import { View, Image, StyleSheet, Text, Pressable, Modal } from "react-native";
import Frame1 from "./Frame1";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Edit1 = ({ onClose }) => {
  const [frameContainer13Visible, setFrameContainer13Visible] = useState(false);

  const openFrameContainer13 = useCallback(() => {
    setFrameContainer13Visible(true);
  }, []);

  const closeFrameContainer13 = useCallback(() => {
    setFrameContainer13Visible(false);
  }, []);

  return (
    <>
      <View style={styles.edit}>
        <Image
          style={styles.arrowBackIosIcon}
          resizeMode="cover"
          source={require("../assets/arrow-back-ios.png")}
        />
        <Text style={[styles.edit1, styles.okTypo]}>Edit</Text>
        <Text style={[styles.ok, styles.okTypo]}>OK</Text>
        <Image
          style={styles.editChild}
          resizeMode="cover"
          source={require("../assets/rectangle-4.png")}
        />
        <View style={[styles.titleParent, styles.parentFlexBox]}>
          <Text style={[styles.title, styles.titleTypo]}>Title</Text>
          <View style={styles.meBeforeYouWrapper}>
            <Text style={[styles.meBeforeYou, styles.titleTypo]}>
              Me Before You
            </Text>
          </View>
        </View>
        <Text style={[styles.cover, styles.titleTypo]}>Cover</Text>
        <View style={[styles.authorParent, styles.parentFlexBox]}>
          <Text style={[styles.title, styles.titleTypo]}>Author</Text>
          <View style={styles.meBeforeYouWrapper}>
            <Text style={[styles.meBeforeYou, styles.titleTypo]}>
              JoJo Moyes
            </Text>
          </View>
        </View>
        <Text style={[styles.genre, styles.titleTypo]}>Genre</Text>
        <Text style={[styles.visibility, styles.titleTypo]}>Visibility</Text>
        <View style={styles.frameParent}>
          <View style={styles.majorWrapper}>
            <Text style={[styles.major, styles.majorTypo]}>Major</Text>
          </View>
          <View style={[styles.novelWrapper, styles.wrapperBorder]}>
            <Text style={[styles.major, styles.majorTypo]}>Novel</Text>
          </View>
          <View style={styles.wrapperBorder}>
            <Text style={[styles.major, styles.majorTypo]}>Essay</Text>
          </View>
          <View style={styles.wrapperBorder}>
            <Text style={[styles.major, styles.majorTypo]}>Poetry</Text>
          </View>
          <View style={styles.wrapperBorder}>
            <Text style={[styles.major, styles.majorTypo]}>Genre</Text>
          </View>
          <View style={styles.wrapperBorder}>
            <Text style={[styles.major, styles.majorTypo]}>Genre</Text>
          </View>
          <View style={styles.wrapperBorder}>
            <Text style={[styles.major, styles.majorTypo]}>Genre</Text>
          </View>
          <View style={styles.wrapperBorder}>
            <Text style={[styles.major, styles.majorTypo]}>Genre</Text>
          </View>
        </View>
        <Image
          style={styles.editIcon}
          resizeMode="cover"
          source={require("../assets/edit.png")}
        />
        <Image
          style={[styles.editItem, styles.editChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={styles.editInner}
          resizeMode="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.editChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={[styles.editChild1, styles.editChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Text style={[styles.allUsers, styles.nobodyTypo]}>All users</Text>
        <Text style={[styles.nobody, styles.nobodyPosition]}>Nobody</Text>
        <Text style={[styles.showToSome, styles.showToSomePosition]}>
          Show to Some users
        </Text>
        <Image
          style={[styles.lockIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/lock.png")}
        />
        <Image
          style={[styles.personAddIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/person-add.png")}
        />
        <Pressable
          style={[styles.ellipseParent, styles.editPosition]}
          onPress={openFrameContainer13}
        >
          <Image
            style={styles.editChildLayout}
            resizeMode="cover"
            source={require("../assets/ellipse-2.png")}
          />
          <Text style={[styles.hideFromSome, styles.majorTypo]}>
            Hide from Some users
          </Text>
          <Image
            style={[styles.personCancelIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/person-cancel.png")}
          />
        </Pressable>
      </View>

      <Modal animationType="fade" transparent visible={frameContainer13Visible}>
        <View style={styles.frameContainer13Overlay}>
          <Pressable
            style={styles.frameContainer13Bg}
            onPress={closeFrameContainer13}
          />
          <Frame1 onClose={closeFrameContainer13} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  okTypo: {
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.subtitle03Bold,
    fontWeight: "700",
    position: "absolute",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  titleTypo: {
    fontSize: FontSize.subtitle02Regular_size,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  majorTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.subtitle03Bold_size,
    color: Color.labelColorLightPrimary,
  },
  wrapperBorder: {
    marginLeft: 6,
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    borderColor: Color.labelColorLightPrimary,
    borderRadius: Border.br_21xl,
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
  },
  editChildLayout: {
    height: 10,
    width: 10,
  },
  nobodyTypo: {
    left: 60,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.subtitle03Bold_size,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  nobodyPosition: {
    top: 492,
    position: "absolute",
  },
  showToSomePosition: {
    top: 519,
    position: "absolute",
  },
  iconLayout: {
    height: 16,
    width: 16,
  },
  editPosition: {
    left: 41,
    position: "absolute",
  },
  arrowBackIosIcon: {
    top: 24,
    left: 25,
    width: 24,
    height: 24,
    position: "absolute",
  },
  edit1: {
    marginLeft: -19,
    top: 26,
    left: "50%",
    fontSize: FontSize.heading02Bold_size,
    textAlign: "center",
  },
  ok: {
    top: 28,
    left: 308,
    fontSize: FontSize.subtitle01Regular_size,
    textAlign: "left",
  },
  editChild: {
    left: 121,
    width: 86,
    height: 114,
    top: 72,
    position: "absolute",
  },
  title: {
    flex: 1,
    fontFamily: FontFamily.subtitle03Bold,
    fontWeight: "700",
    fontSize: FontSize.subtitle02Regular_size,
  },
  meBeforeYou: {
    fontWeight: "500",
    fontFamily: FontFamily.subtitle02Regular,
  },
  meBeforeYouWrapper: {
    borderRadius: Border.br_9xs,
    borderColor: Color.colorGainsboro_300,
    width: 199,
    height: 30,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 0,
    marginLeft: 12,
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
  titleParent: {
    top: 222,
    width: 280,
    alignItems: "center",
    left: 40,
    position: "absolute",
  },
  cover: {
    width: 69,
    left: 40,
    fontSize: FontSize.subtitle02Regular_size,
    fontFamily: FontFamily.subtitle03Bold,
    fontWeight: "700",
    position: "absolute",
    top: 72,
  },
  authorParent: {
    top: 264,
    width: 280,
    alignItems: "center",
    left: 40,
    position: "absolute",
  },
  genre: {
    top: 314,
    left: 40,
    fontSize: FontSize.subtitle02Regular_size,
    fontFamily: FontFamily.subtitle03Bold,
    fontWeight: "700",
    position: "absolute",
  },
  visibility: {
    top: 436,
    left: 40,
    fontSize: FontSize.subtitle02Regular_size,
    fontFamily: FontFamily.subtitle03Bold,
    fontWeight: "700",
    position: "absolute",
  },
  major: {
    textAlign: "center",
  },
  majorWrapper: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    borderColor: Color.labelColorLightPrimary,
    borderRadius: Border.br_21xl,
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
  },
  novelWrapper: {
    backgroundColor: Color.colorGainsboro_200,
  },
  frameParent: {
    top: 351,
    flexWrap: "wrap",
    flexDirection: "row",
    width: 280,
    left: 40,
    position: "absolute",
  },
  editIcon: {
    top: 170,
    left: 190,
    borderRadius: Border.br_xl,
    width: 32,
    height: 32,
    position: "absolute",
  },
  editItem: {
    top: 468,
    left: 41,
    position: "absolute",
  },
  editInner: {
    top: 470,
    left: 43,
    width: 6,
    height: 6,
    position: "absolute",
  },
  ellipseIcon: {
    top: 495,
    left: 41,
    position: "absolute",
  },
  editChild1: {
    top: 522,
    left: 41,
    position: "absolute",
  },
  allUsers: {
    top: 465,
    position: "absolute",
  },
  nobody: {
    left: 60,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.subtitle03Bold_size,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  showToSome: {
    left: 60,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.subtitle03Bold_size,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
  },
  lockIcon: {
    left: 111,
    top: 492,
    position: "absolute",
  },
  personAddIcon: {
    left: 184,
    top: 519,
    position: "absolute",
  },
  frameContainer13Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer13Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  hideFromSome: {
    marginLeft: 8,
    textAlign: "left",
  },
  personCancelIcon: {
    marginLeft: 8,
  },
  ellipseParent: {
    top: 549,
    alignItems: "center",
    flexDirection: "row",
  },
  edit: {
    width: 360,
    height: 640,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
    backgroundColor: Color.systemBackgroundLightPrimary,
  },
});

export default Edit1;
