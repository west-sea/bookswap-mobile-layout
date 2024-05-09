import * as React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Frame = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.rectangleParent, styles.frameChildLayout]}>
      <View style={[styles.frameChild, styles.frameBg]} />
      <View style={[styles.frameWrapper, styles.sejunParentFlexBox]}>
        <View style={[styles.sejunParent, styles.sejunParentFlexBox]}>
          <Text style={styles.sejun}>sejun</Text>
          <Image
            style={styles.materialSymbolscancelOutlinIcon}
            resizeMode="cover"
            source={require("../assets/materialsymbolscanceloutline1.png")}
          />
        </View>
      </View>
      <View style={[styles.alphabetickeyboard, styles.homeindicatorPosition]}>
        <View style={[styles.keys, styles.keysPosition]}>
          <View style={styles.topRow}>
            <View style={styles.key}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterPosition]}>q</Text>
            </View>
            <View style={[styles.key1, styles.keyPosition1]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterPosition]}>w</Text>
            </View>
            <View style={styles.key2}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterPosition]}>e</Text>
            </View>
            <View style={styles.key3}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterPosition]}>r</Text>
            </View>
            <View style={styles.key4}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterPosition]}>t</Text>
            </View>
            <View style={styles.key5}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterPosition]}>y</Text>
            </View>
            <View style={styles.key6}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterPosition]}>u</Text>
            </View>
            <View style={styles.key7}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterPosition]}>i</Text>
            </View>
            <View style={[styles.key8, styles.keyPosition]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterPosition]}>o</Text>
            </View>
            <View style={styles.key9}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterPosition]}>p</Text>
            </View>
          </View>
          <View style={styles.middleRow}>
            <View style={styles.key10}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterPosition]}>a</Text>
            </View>
            <View style={[styles.key11, styles.keyPosition1]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter11, styles.letterPosition]}>s</Text>
            </View>
            <View style={styles.key12}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterPosition]}>d</Text>
            </View>
            <View style={styles.key13}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterPosition]}>f</Text>
            </View>
            <View style={styles.key14}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterPosition]}>g</Text>
            </View>
            <View style={styles.key15}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterPosition]}>h</Text>
            </View>
            <View style={styles.key16}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterPosition]}>j</Text>
            </View>
            <View style={[styles.key17, styles.keyPosition]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter11, styles.letterPosition]}>k</Text>
            </View>
            <View style={styles.key18}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterPosition]}>l</Text>
            </View>
          </View>
          <View style={styles.bottomRow}>
            <View style={styles.keys1}>
              <View style={styles.key19}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter11, styles.letterPosition]}>z</Text>
              </View>
              <View style={styles.key20}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter20, styles.letterPosition]}>x</Text>
              </View>
              <View style={styles.key21}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter11, styles.letterPosition]}>c</Text>
              </View>
              <View style={styles.key22}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter, styles.letterPosition]}>v</Text>
              </View>
              <View style={styles.key23}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter20, styles.letterPosition]}>b</Text>
              </View>
              <View style={styles.key24}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter11, styles.letterPosition]}>n</Text>
              </View>
              <View style={styles.key25}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter11, styles.letterPosition]}>m</Text>
              </View>
            </View>
            <Image
              style={[styles.keyIcon, styles.keyIconLayout]}
              resizeMode="cover"
              source={require("../assets/-key.png")}
            />
            <Image
              style={[styles.keyIcon1, styles.keyIconLayout]}
              resizeMode="cover"
              source={require("../assets/-key1.png")}
            />
          </View>
        </View>
        <View style={[styles.bottomRow1, styles.keysPosition]}>
          <View style={styles.key26}>
            <View style={styles.keycontainerShadowBox} />
            <Text style={[styles.letter26, styles.letterTypo]}>123</Text>
          </View>
          <View style={[styles.key27, styles.keySpaceBlock]}>
            <View style={styles.keycontainerShadowBox1} />
            <Text style={[styles.letter27, styles.letter27Position]}>
              space
            </Text>
          </View>
          <View style={[styles.key28, styles.keySpaceBlock]}>
            <View style={styles.keycontainerShadowBox} />
            <Text style={[styles.letter26, styles.letterTypo]}>return</Text>
          </View>
        </View>
        <View style={styles.emojiDictation}>
          <Image
            style={styles.iconEmoji}
            resizeMode="cover"
            source={require("../assets/icon--emoji.png")}
          />
          <Image
            style={styles.iconDictation}
            resizeMode="cover"
            source={require("../assets/icon--dictation.png")}
          />
        </View>
        <View style={[styles.homeindicator, styles.homeindicatorPosition]}>
          <View style={[styles.homeIndicator, styles.letter27Position]} />
        </View>
      </View>
      <Text style={[styles.inputUserName, styles.done1Typo]}>
        Input user name you want to hide
      </Text>
      <Pressable
        style={styles.done}
        onPress={() => navigation.navigate("Edit")}
      >
        <Text style={[styles.done1, styles.done1Typo]}>Done</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    height: 571,
    width: 360,
  },
  frameBg: {
    backgroundColor: Color.systemBackgroundLightPrimary,
    position: "absolute",
  },
  sejunParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  homeindicatorPosition: {
    bottom: 0,
    position: "absolute",
  },
  keysPosition: {
    left: 3,
    right: 3,
    position: "absolute",
  },
  letterPosition: {
    justifyContent: "center",
    display: "flex",
    left: 0,
    position: "absolute",
  },
  keyPosition1: {
    left: 36,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keyPosition: {
    right: 36,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keyIconLayout: {
    width: 42,
    height: 42,
    top: 0,
    position: "absolute",
  },
  letterTypo: {
    lineHeight: 21,
    fontSize: FontSize.subtitle01Regular_size,
    marginTop: -10,
    textAlign: "center",
    letterSpacing: 0,
    top: "50%",
    color: Color.labelColorLightPrimary,
  },
  keySpaceBlock: {
    marginLeft: 6,
    height: 42,
  },
  letter27Position: {
    left: "50%",
    position: "absolute",
  },
  done1Typo: {
    fontFamily: FontFamily.subtitle03Bold,
    fontWeight: "700",
    fontSize: FontSize.subtitle01Regular_size,
    color: Color.labelColorLightPrimary,
  },
  frameChild: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    left: 0,
    top: 0,
    height: 571,
    width: 360,
  },
  sejun: {
    fontSize: FontSize.subtitle03Bold_size,
    textAlign: "left",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interRegular,
  },
  materialSymbolscancelOutlinIcon: {
    width: 12,
    height: 12,
    marginLeft: 4,
    overflow: "hidden",
  },
  sejunParent: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGainsboro_300,
    paddingLeft: Padding.p_5xs,
    paddingTop: Padding.p_9xs,
    paddingRight: Padding.p_9xs,
    paddingBottom: Padding.p_9xs,
  },
  frameWrapper: {
    top: 111,
    left: 20,
    borderRadius: Border.br_mini,
    borderStyle: "solid",
    borderColor: Color.labelColorLightPrimary,
    borderWidth: 1,
    width: 320,
    height: 40,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
    backgroundColor: Color.systemBackgroundLightPrimary,
    position: "absolute",
  },
  keycontainerShadowBox1: {
    borderRadius: Border.br_8xs_6,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    backgroundColor: Color.systemBackgroundLightPrimary,
    position: "absolute",
  },
  letter: {
    width: 30,
    alignItems: "flex-end",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    lineHeight: 34,
    letterSpacing: 0,
    fontSize: FontSize.size_7xl,
    top: "50%",
    marginTop: -20,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.labelColorLightPrimary,
  },
  key: {
    right: 324,
    height: 42,
    left: 0,
    top: 0,
    position: "absolute",
  },
  key1: {
    right: 288,
  },
  key2: {
    right: 252,
    left: 72,
    height: 42,
    top: 0,
    position: "absolute",
  },
  key3: {
    right: 216,
    left: 108,
    height: 42,
    top: 0,
    position: "absolute",
  },
  key4: {
    right: 180,
    left: 144,
    height: 42,
    top: 0,
    position: "absolute",
  },
  key5: {
    right: 144,
    left: 180,
    height: 42,
    top: 0,
    position: "absolute",
  },
  key6: {
    right: 108,
    left: 216,
    height: 42,
    top: 0,
    position: "absolute",
  },
  key7: {
    right: 72,
    left: 252,
    height: 42,
    top: 0,
    position: "absolute",
  },
  key8: {
    left: 288,
  },
  key9: {
    left: 324,
    height: 42,
    right: 0,
    top: 0,
    position: "absolute",
  },
  topRow: {
    height: 42,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  key10: {
    right: 286,
    height: 42,
    left: 0,
    top: 0,
    position: "absolute",
  },
  letter11: {
    width: 29,
    alignItems: "flex-end",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    lineHeight: 34,
    letterSpacing: 0,
    fontSize: FontSize.size_7xl,
    top: "50%",
    marginTop: -20,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.labelColorLightPrimary,
  },
  key11: {
    right: 251,
  },
  key12: {
    right: 215,
    left: 71,
    height: 42,
    top: 0,
    position: "absolute",
  },
  key13: {
    right: 179,
    left: 107,
    height: 42,
    top: 0,
    position: "absolute",
  },
  key14: {
    right: 143,
    left: 143,
    height: 42,
    top: 0,
    position: "absolute",
  },
  key15: {
    right: 107,
    left: 179,
    height: 42,
    top: 0,
    position: "absolute",
  },
  key16: {
    right: 71,
    left: 215,
    height: 42,
    top: 0,
    position: "absolute",
  },
  key17: {
    left: 251,
  },
  key18: {
    left: 286,
    height: 42,
    right: 0,
    top: 0,
    position: "absolute",
  },
  middleRow: {
    top: 54,
    right: 19,
    left: 19,
    height: 42,
    position: "absolute",
  },
  key19: {
    right: 209,
    height: 42,
    left: 0,
    top: 0,
    position: "absolute",
  },
  letter20: {
    width: 28,
    alignItems: "flex-end",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    lineHeight: 34,
    letterSpacing: 0,
    fontSize: FontSize.size_7xl,
    top: "50%",
    marginTop: -20,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.labelColorLightPrimary,
  },
  key20: {
    right: 175,
    left: 35,
    height: 42,
    top: 0,
    position: "absolute",
  },
  key21: {
    right: 140,
    left: 69,
    height: 42,
    top: 0,
    position: "absolute",
  },
  key22: {
    right: 104,
    left: 104,
    height: 42,
    top: 0,
    position: "absolute",
  },
  key23: {
    right: 70,
    left: 140,
    height: 42,
    top: 0,
    position: "absolute",
  },
  key24: {
    right: 35,
    left: 174,
    height: 42,
    top: 0,
    position: "absolute",
  },
  key25: {
    left: 209,
    height: 42,
    right: 0,
    top: 0,
    position: "absolute",
  },
  keys1: {
    right: 58,
    left: 58,
    height: 42,
    top: 0,
    position: "absolute",
  },
  keyIcon: {
    left: 0,
  },
  keyIcon1: {
    right: 0,
  },
  bottomRow: {
    top: 108,
    height: 42,
    right: 0,
    left: 0,
    position: "absolute",
  },
  keys: {
    top: 8,
    height: 150,
  },
  keycontainerShadowBox: {
    backgroundColor: Color.colorDarkgray_100,
    borderRadius: Border.br_8xs_6,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  letter26: {
    width: 91,
    justifyContent: "center",
    display: "flex",
    left: 0,
    position: "absolute",
    lineHeight: 21,
    fontSize: FontSize.subtitle01Regular_size,
    marginTop: -10,
    fontFamily: FontFamily.interRegular,
    alignItems: "center",
  },
  key26: {
    width: 91,
    height: 42,
  },
  letter27: {
    marginLeft: -22,
    fontWeight: "500",
    fontFamily: FontFamily.subtitle02Regular,
    lineHeight: 21,
    fontSize: FontSize.subtitle01Regular_size,
    marginTop: -10,
    textAlign: "center",
    letterSpacing: 0,
    top: "50%",
    color: Color.labelColorLightPrimary,
  },
  key27: {
    flex: 1,
  },
  key28: {
    width: 91,
  },
  bottomRow1: {
    top: 170,
    flexDirection: "row",
  },
  iconEmoji: {
    width: 27,
    height: 27,
  },
  iconDictation: {
    width: 19,
    height: 28,
  },
  emojiDictation: {
    top: 235,
    right: 31,
    left: 31,
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelColorLightPrimary,
    width: 134,
    height: 5,
  },
  homeindicator: {
    left: 1,
    height: 34,
    right: 0,
  },
  alphabetickeyboard: {
    backgroundColor: Color.colorLightgray,
    height: 290,
    left: 0,
    overflow: "hidden",
    width: 360,
    bottom: 0,
  },
  inputUserName: {
    marginLeft: -130,
    top: 70,
    left: "50%",
    position: "absolute",
    textAlign: "center",
    fontWeight: "700",
  },
  done1: {
    textAlign: "left",
  },
  done: {
    left: 299,
    top: 28,
    position: "absolute",
  },
  rectangleParent: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
});

export default Frame;
