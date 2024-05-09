import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text ,TextInput, ScrollView } from "react-native";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const images = {
    image5: require("../assets/image-5.png"),
    image6: require("../assets/image-6.png"),
    image4: require("../assets/image-4.png"),
    sm18Cancel: require("../assets/sm18--cancel.png")
  };
  
  const books = [
    { title: "A Little Life", author: "Yanagihara, Hanya", genre: "Novel", image: 'image5' },
    { title: "Poems", author: "Louise Gluck", genre: "Poetry", image: 'image6' },
    { title: "Small Things Like These", author: "Claire Keegan", genre: "Novel", image: 'image4' },
  ];

const Search = () => {
  return (
    <View style={styles.searchFill}>
      <View style={[styles.bookItemParent, styles.barLayout]}>
        <View style={[styles.bookItem, styles.bookItemSpaceBlock]}>
          <View style={styles.bookImg}>
            <Image
              style={[styles.image2Icon, styles.image2IconPosition]}
              contentFit="cover"
              source={require("../assets/image-2.png")}
            />
            <View style={[styles.bookImgChild, styles.inputBorder]} />
          </View>
          <View style={styles.frameParent}>
            <View style={styles.titleParent}>
              <Text style={styles.title}>JUSTICE</Text>
              <Text style={[styles.author, styles.novelTypo]}>
                Michael J. Sandel
              </Text>
              <Text style={[styles.novel, styles.novelTypo]}>
                02/28 · Philosophy
              </Text>
            </View>
            <View style={styles.tagParent}>
              <View style={[styles.tag, styles.tagFlexBox]}>
                <View style={styles.tagWrapper}>
                  <Text style={[styles.tag1, styles.tag1Typo]}>Request</Text>
                </View>
                <Image
                  style={[styles.sm18Message, styles.sm18Layout]}
                  contentFit="cover"
                  source={require("../assets/sm18--message.png")}
                />
              </View>
              <Text style={[styles.hideFrom1, styles.input1Typo]} />
            </View>
          </View>
          <Image
            style={[styles.md24Menu, styles.md24Layout]}
            contentFit="cover"
            source={require("../assets/md24--menu.png")}
          />
        </View>
        <View style={[styles.bookItem1, styles.bookItemSpaceBlock]}>
          <View style={styles.bookImg}>
            <Image
              style={[styles.image2Icon, styles.image2IconPosition]}
              contentFit="cover"
              source={require("../assets/image-3.png")}
            />
            <View style={[styles.bookImgChild, styles.inputBorder]} />
          </View>
          <View style={styles.frameParent}>
            <View style={styles.titleParent}>
              <Text style={styles.title}>JUSTICE 범죄학</Text>
              <Text style={[styles.author, styles.novelTypo]}>박상민</Text>
              <Text style={[styles.novel, styles.novelTypo]}>03/19</Text>
            </View>
            <View style={styles.tagParent}>
              <View style={[styles.tag, styles.tagFlexBox]}>
                <View style={styles.tagWrapper}>
                  <Text style={[styles.tag1, styles.tag1Typo]}>Request</Text>
                </View>
                <Image
                  style={[styles.sm18Message, styles.sm18Layout]}
                  contentFit="cover"
                  source={require("../assets/sm18--message.png")}
                />
              </View>
              <Text style={[styles.hideFrom1, styles.input1Typo]} />
            </View>
          </View>
          <Image
            style={[styles.md24Menu, styles.md24Layout]}
            contentFit="cover"
            source={require("../assets/md24--menu.png")}
          />
        </View>
      </View>
      <View style={[styles.alphabetickeyboard, styles.barLayout]}>
        <View style={[styles.keys, styles.keysPosition]}>
          <View style={[styles.topRow, styles.keyPosition2]}>
            <View style={[styles.key, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterTypo]}>q</Text>
            </View>
            <View style={[styles.key1, styles.keyPosition1]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterTypo]}>w</Text>
            </View>
            <View style={[styles.key2, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterTypo]}>e</Text>
            </View>
            <View style={[styles.key3, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterTypo]}>r</Text>
            </View>
            <View style={[styles.key4, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterTypo]}>t</Text>
            </View>
            <View style={[styles.key5, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterTypo]}>y</Text>
            </View>
            <View style={[styles.key6, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterTypo]}>u</Text>
            </View>
            <View style={[styles.key7, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterTypo]}>i</Text>
            </View>
            <View style={[styles.key8, styles.keyPosition]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterTypo]}>o</Text>
            </View>
            <View style={[styles.key9, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterTypo]}>p</Text>
            </View>
          </View>
          <View style={styles.middleRow}>
            <View style={[styles.key10, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterTypo]}>a</Text>
            </View>
            <View style={[styles.key11, styles.keyPosition1]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter11, styles.letterTypo]}>s</Text>
            </View>
            <View style={[styles.key12, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterTypo]}>d</Text>
            </View>
            <View style={[styles.key13, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterTypo]}>f</Text>
            </View>
            <View style={[styles.key14, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterTypo]}>g</Text>
            </View>
            <View style={[styles.key15, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterTypo]}>h</Text>
            </View>
            <View style={[styles.key16, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterTypo]}>j</Text>
            </View>
            <View style={[styles.key17, styles.keyPosition]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter11, styles.letterTypo]}>k</Text>
            </View>
            <View style={[styles.key18, styles.keyPosition2]}>
              <View style={styles.keycontainerShadowBox1} />
              <Text style={[styles.letter, styles.letterTypo]}>l</Text>
            </View>
          </View>
          <View style={styles.bottomRow}>
            <View style={[styles.keys1, styles.keyPosition2]}>
              <View style={[styles.key19, styles.keyPosition2]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter11, styles.letterTypo]}>z</Text>
              </View>
              <View style={[styles.key20, styles.keyPosition2]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter20, styles.letterTypo]}>x</Text>
              </View>
              <View style={[styles.key21, styles.keyPosition2]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter11, styles.letterTypo]}>c</Text>
              </View>
              <View style={[styles.key22, styles.keyPosition2]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter, styles.letterTypo]}>v</Text>
              </View>
              <View style={[styles.key23, styles.keyPosition2]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter20, styles.letterTypo]}>b</Text>
              </View>
              <View style={[styles.key24, styles.keyPosition2]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter11, styles.letterTypo]}>n</Text>
              </View>
              <View style={[styles.key25, styles.keyPosition2]}>
                <View style={styles.keycontainerShadowBox1} />
                <Text style={[styles.letter11, styles.letterTypo]}>m</Text>
              </View>
            </View>
            <Image
              style={[styles.keyIcon, styles.keyIconLayout]}
              contentFit="cover"
              source={require("../assets/-key.png")}
            />
            <Image
              style={[styles.keyIcon1, styles.keyIconLayout]}
              contentFit="cover"
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
            <Text style={[styles.letter27, styles.letter27Position]}>
              space
            </Text>
          </View>
          <View style={[styles.key28, styles.keySpaceBlock]}>
            <View style={styles.keycontainerShadowBox} />
            <Text style={[styles.letter26, styles.letterPosition]}>return</Text>
          </View>
        </View>
        <View style={styles.emojiDictation}>
          <Image
            style={styles.iconEmoji}
            contentFit="cover"
            source={require("../assets/icon--emoji.png")}
          />
          <Image
            style={styles.iconDictation}
            contentFit="cover"
            source={require("../assets/icon--dictation.png")}
          />
        </View>
        <View style={styles.homeindicator}>
          <View style={[styles.homeIndicator, styles.letter27Position]} />
        </View>
      </View>
      <View style={[styles.bar, styles.bookItemSpaceBlock]}>
        <View style={styles.titleWrapper}>
          <Text style={[styles.title2, styles.tag1Typo]}>2 search results</Text>
        </View>
      </View>
      <View style={[styles.bar1, styles.keyPosition2]}>
        
        
        
        
        
        <View style={[styles.input, styles.tagFlexBox]}>
          <Text style={[styles.input1, styles.input1Typo]}>justice</Text>
          <Image
            style={styles.sm18Layout}
            contentFit="cover"
            source={require("../assets/sm18--cancel.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  barLayout: {
    width: 360,
    left: 0,
  },
  bookItemSpaceBlock: {
    paddingHorizontal: Padding.p_xl,
    flexDirection: "row",
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
  inputBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  novelTypo: {
    marginTop: 6,
    fontFamily: FontFamily.subtitle02Regular,
    fontWeight: "500",
    lineHeight: 18,
    fontSize: FontSize.subtitle03Regular_size,
    textAlign: "left",
  },
  tagFlexBox: {
    paddingLeft: Padding.p_xs,
    height: 30,
    alignItems: "center",
    flexDirection: "row",
  },
  tag1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.subtitle02Regular,
    fontWeight: "500",
    lineHeight: 18,
    fontSize: FontSize.subtitle03Regular_size,
  },
  sm18Layout: {
    height: 18,
    width: 18,
  },
  input1Typo: {
    fontFamily: FontFamily.subtitle02Regular,
    fontWeight: "500",
  },
  md24Layout: {
    width: 24,
    height: 24,
  },
  keysPosition: {
    left: 3,
    right: 3,
    position: "absolute",
  },
  keyPosition2: {
    top: 0,
    position: "absolute",
  },
  letterTypo: {
    alignItems: "flex-end",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    lineHeight: 34,
    letterSpacing: 0,
    fontSize: FontSize.size_7xl,
    top: "50%",
    marginTop: -20,
    textAlign: "center",
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
  letterPosition: {
    lineHeight: 21,
    marginTop: -10,
    color: Color.labelColorLightPrimary,
    letterSpacing: 0,
    top: "50%",
    textAlign: "center",
    fontSize: FontSize.subtitle01Bold_size,
  },
  keySpaceBlock: {
    marginLeft: 6,
    height: 42,
  },
  letter27Position: {
    left: "50%",
    position: "absolute",
  },
  image2Icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  bookImgChild: {
    borderColor: Color.colorGray_100,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  bookImg: {
    width: 80,
    height: 120,
  },
  title: {
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.subtitle01Bold,
    width: 196,
    height: 24,
    fontSize: FontSize.subtitle01Bold_size,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.iconOnLightActive,
  },
  author: {
    color: Color.iconOnLightActive,
  },
  novel: {
    color: Color.iconOnLightEnable,
  },
  titleParent: {
    alignSelf: "stretch",
  },
  tag1: {
    color: Color.iconOnLightActive,
  },
  tagWrapper: {
    paddingRight: Padding.p_9xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  sm18Message: {
    display: "none",
  },
  tag: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.container200,
    paddingTop: Padding.p_7xs,
    paddingRight: Padding.p_5xs,
    paddingBottom: Padding.p_7xs,
    justifyContent: "center",
  },
  hideFrom1: {
    marginLeft: 8,
    color: Color.iconOnLightEnable,
    lineHeight: 18,
    fontSize: FontSize.subtitle03Regular_size,
    fontWeight: "500",
    textAlign: "left",
  },
  tagParent: {
    justifyContent: "center",
    height: 30,
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent: {
    marginLeft: 10,
    justifyContent: "space-between",
    alignSelf: "stretch",
    flex: 1,
  },
  md24Menu: {
    display: "none",
    marginLeft: 10,
  },
  bookItem: {
    alignSelf: "stretch",
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.containerWhite,
  },
  bookItem1: {
    marginTop: 20,
    alignSelf: "stretch",
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.containerWhite,
  },
  bookItemParent: {
    top: 105,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
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
    height: "100%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.containerWhite,
  },
  letter: {
    width: 30,
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
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  letter26: {
    fontFamily: FontFamily.interRegular,
    width: 91,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    lineHeight: 21,
    marginTop: -10,
    left: 0,
    position: "absolute",
  },
  key26: {
    width: 91,
    height: 42,
  },
  letter27: {
    marginLeft: -22,
    lineHeight: 21,
    marginTop: -10,
    color: Color.labelColorLightPrimary,
    letterSpacing: 0,
    top: "50%",
    textAlign: "center",
    fontSize: FontSize.subtitle01Bold_size,
    fontFamily: FontFamily.subtitle02Regular,
    fontWeight: "500",
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
    borderRadius: 100,
    backgroundColor: Color.labelColorLightPrimary,
    width: 134,
    height: 5,
  },
  homeindicator: {
    bottom: 0,
    left: 1,
    height: 34,
    right: 0,
    position: "absolute",
  },
  alphabetickeyboard: {
    bottom: -290,
    backgroundColor: "#d1d3d9",
    height: 290,
    position: "absolute",
    overflow: "hidden",
  },
  title2: {
    color: Color.iconOnLightEnable,
  },
  titleWrapper: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.container100,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_7xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  bar: {
    top: 60,
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    width: 360,
    left: 0,
    position: "absolute",
  },
  input1: {
    fontSize: FontSize.subtitle02Regular_size,
    lineHeight: 21,
    textAlign: "left",
    fontWeight: "500",
    color: Color.iconOnLightActive,
    flex: 1,
  },
  input: {
    borderRadius: Border.br_mini,
    borderColor: Color.container200,
    paddingRight: Padding.p_7xs,
    marginLeft: 10,
    borderWidth: 1,
    borderStyle: "solid",
    flex: 1,
    backgroundColor: Color.containerWhite,
  },
  bar1: {
    height: 60,
    paddingLeft: Padding.p_3xs,
    paddingRight: Padding.p_mini,
    alignItems: "center",
    flexDirection: "row",
    width: 360,
    left: 0,
    backgroundColor: Color.containerWhite,
  },
  searchFill: {
    height: 640,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.containerWhite,
  },
});

export default Search;
