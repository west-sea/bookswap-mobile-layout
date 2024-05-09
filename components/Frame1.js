import * as React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const Frame1 = ({ onClose }) => {
  return (
    <View style={[styles.rectangleParent, styles.rectangleParentLayout]}>
      <View style={styles.frameChild} />
      <View style={styles.inputWrapper}>
        <Text style={[styles.input, styles.inputTypo]}>input</Text>
      </View>
      <View style={[styles.alphabetickeyboard, styles.homeindicatorPosition]}>
        <View style={[styles.keys, styles.keysPosition]}>
          <View style={[styles.topRow, styles.keyPosition2]}>
            <View style={[styles.key, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterFlexBox]}>q</Text>
            </View>
            <View style={[styles.key1, styles.keyPosition1]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterFlexBox]}>w</Text>
            </View>
            <View style={[styles.key2, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterFlexBox]}>e</Text>
            </View>
            <View style={[styles.key3, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterFlexBox]}>r</Text>
            </View>
            <View style={[styles.key4, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterFlexBox]}>t</Text>
            </View>
            <View style={[styles.key5, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterFlexBox]}>y</Text>
            </View>
            <View style={[styles.key6, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterFlexBox]}>u</Text>
            </View>
            <View style={[styles.key7, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterFlexBox]}>i</Text>
            </View>
            <View style={[styles.key8, styles.keyPosition]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterFlexBox]}>o</Text>
            </View>
            <View style={[styles.key9, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterFlexBox]}>p</Text>
            </View>
          </View>
          <View style={styles.middleRow}>
            <View style={[styles.key10, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterFlexBox]}>a</Text>
            </View>
            <View style={[styles.key11, styles.keyPosition1]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter11, styles.letterFlexBox]}>s</Text>
            </View>
            <View style={[styles.key12, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterFlexBox]}>d</Text>
            </View>
            <View style={[styles.key13, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterFlexBox]}>f</Text>
            </View>
            <View style={[styles.key14, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterFlexBox]}>g</Text>
            </View>
            <View style={[styles.key15, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterFlexBox]}>h</Text>
            </View>
            <View style={[styles.key16, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterFlexBox]}>j</Text>
            </View>
            <View style={[styles.key17, styles.keyPosition]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter11, styles.letterFlexBox]}>k</Text>
            </View>
            <View style={[styles.key18, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterFlexBox]}>l</Text>
            </View>
          </View>
          <View style={styles.bottomRow}>
            <View style={[styles.keys1, styles.keyPosition2]}>
              <View style={[styles.key19, styles.keyPosition2]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter11, styles.letterFlexBox]}>z</Text>
              </View>
              <View style={[styles.key20, styles.keyPosition2]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter20, styles.letterFlexBox]}>x</Text>
              </View>
              <View style={[styles.key21, styles.keyPosition2]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter11, styles.letterFlexBox]}>c</Text>
              </View>
              <View style={[styles.key22, styles.keyPosition2]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter, styles.letterFlexBox]}>v</Text>
              </View>
              <View style={[styles.key23, styles.keyPosition2]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter20, styles.letterFlexBox]}>b</Text>
              </View>
              <View style={[styles.key24, styles.keyPosition2]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter11, styles.letterFlexBox]}>n</Text>
              </View>
              <View style={[styles.key25, styles.keyPosition2]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter11, styles.letterFlexBox]}>m</Text>
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
            <Text style={[styles.letter26, styles.letterPosition]}>123</Text>
          </View>
          <View style={[styles.key27, styles.keySpaceBlock]}>
            <View style={styles.keycontainerShadowBox1} />
            <Text style={[styles.letter27, styles.letterPosition]}>space</Text>
          </View>
          <View style={[styles.key28, styles.keySpaceBlock]}>
            <View style={styles.keycontainerShadowBox} />
            <Text style={[styles.letter26, styles.letterPosition]}>return</Text>
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
          <View style={styles.homeIndicator} />
        </View>
      </View>
      <Text style={[styles.inputUserName, styles.doneTypo]}>
        Input user name you want to hide
      </Text>
      <Text style={[styles.done, styles.doneTypo]}>Done</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleParentLayout: {
    overflow: "hidden",
    width: 360,
  },
  inputTypo: {
    fontFamily: FontFamily.subtitle02Regular,
    fontWeight: "500",
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
  keyPosition2: {
    top: 0,
    height: 42,
    position: "absolute",
  },
  letterFlexBox: {
    justifyContent: "center",
    display: "flex",
    left: 0,
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
  letterPosition: {
    lineHeight: 21,
    marginTop: -10,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    letterSpacing: 0,
    top: "50%",
    fontSize: FontSize.subtitle01Regular_size,
    position: "absolute",
  },
  keySpaceBlock: {
    marginLeft: 6,
    height: 42,
  },
  doneTypo: {
    fontFamily: FontFamily.subtitle03Bold,
    fontWeight: "700",
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.subtitle01Regular_size,
    position: "absolute",
  },
  frameChild: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    backgroundColor: Color.systemBackgroundLightPrimary,
    left: 0,
    top: 0,
    position: "absolute",
    height: 571,
    width: 360,
  },
  input: {
    color: "#bfbfbf",
    textAlign: "left",
    fontSize: FontSize.subtitle01Regular_size,
    fontFamily: FontFamily.subtitle02Regular,
    fontWeight: "500",
    flex: 1,
  },
  inputWrapper: {
    top: 111,
    left: 20,
    borderRadius: Border.br_mini,
    borderStyle: "solid",
    borderColor: Color.labelColorLightPrimary,
    borderWidth: 1,
    width: 320,
    height: 40,
    justifyContent: "flex-end",
    paddingLeft: Padding.p_base,
    paddingRight: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.systemBackgroundLightPrimary,
    position: "absolute",
    overflow: "hidden",
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
    color: Color.labelColorLightPrimary,
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
    position: "absolute",
  },
  key: {
    right: 324,
    height: 42,
    left: 0,
  },
  key1: {
    right: 288,
  },
  key2: {
    right: 252,
    left: 72,
    height: 42,
  },
  key3: {
    right: 216,
    left: 108,
    height: 42,
  },
  key4: {
    right: 180,
    left: 144,
    height: 42,
  },
  key5: {
    right: 144,
    left: 180,
    height: 42,
  },
  key6: {
    right: 108,
    left: 216,
    height: 42,
  },
  key7: {
    right: 72,
    left: 252,
    height: 42,
  },
  key8: {
    left: 288,
  },
  key9: {
    left: 324,
    height: 42,
    right: 0,
  },
  topRow: {
    height: 42,
    right: 0,
    left: 0,
  },
  key10: {
    right: 286,
    height: 42,
    left: 0,
  },
  letter11: {
    width: 29,
    alignItems: "flex-end",
    color: Color.labelColorLightPrimary,
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
    position: "absolute",
  },
  key11: {
    right: 251,
  },
  key12: {
    right: 215,
    left: 71,
    height: 42,
  },
  key13: {
    right: 179,
    left: 107,
    height: 42,
  },
  key14: {
    right: 143,
    left: 143,
    height: 42,
  },
  key15: {
    right: 107,
    left: 179,
    height: 42,
  },
  key16: {
    right: 71,
    left: 215,
    height: 42,
  },
  key17: {
    left: 251,
  },
  key18: {
    left: 286,
    height: 42,
    right: 0,
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
  },
  letter20: {
    width: 28,
    alignItems: "flex-end",
    color: Color.labelColorLightPrimary,
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
    position: "absolute",
  },
  key20: {
    right: 175,
    left: 35,
    height: 42,
  },
  key21: {
    right: 140,
    left: 69,
    height: 42,
  },
  key22: {
    right: 104,
    left: 104,
    height: 42,
  },
  key23: {
    right: 70,
    left: 140,
    height: 42,
  },
  key24: {
    right: 35,
    left: 174,
    height: 42,
  },
  key25: {
    left: 209,
    height: 42,
    right: 0,
  },
  keys1: {
    right: 58,
    left: 58,
    height: 42,
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
    fontFamily: FontFamily.interRegular,
    width: 91,
    justifyContent: "center",
    display: "flex",
    left: 0,
    lineHeight: 21,
    marginTop: -10,
    alignItems: "center",
  },
  key26: {
    width: 91,
    height: 42,
  },
  letter27: {
    marginLeft: -22,
    left: "50%",
    fontFamily: FontFamily.subtitle02Regular,
    fontWeight: "500",
  },
  key27: {
    flex: 1,
    marginLeft: 6,
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
    left: "50%",
    position: "absolute",
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
    textAlign: "center",
    fontWeight: "700",
  },
  done: {
    top: 28,
    left: 299,
    textAlign: "left",
  },
  rectangleParent: {
    maxWidth: "100%",
    maxHeight: "100%",
    height: 571,
    overflow: "hidden",
    width: 360,
  },
});

export default Frame1;
