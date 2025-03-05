import { Text, View, StyleSheet, Image } from "react-native";
import { FugazOne_400Regular } from "@expo-google-fonts/fugaz-one";
import { Inter_400Regular, Inter_300Light } from "@expo-google-fonts/inter";
import { KronaOne_400Regular } from "@expo-google-fonts/krona-one";
import { useFonts } from "expo-font";
import testImage from "./test-sunflower.jpg";
import { Button } from "react-native-elements";
import { useState } from "react";

function ResultsListCard({ contents, imgURL }) {
  const [fontsLoaded] = useFonts({
    Inter_300Light,
    FugazOne_400Regular,
    KronaOne_400Regular,
  });

  const [liked, setLiked] = useState(false);

  function favouriteFunc() {
    setLiked(!liked);
    console.log("there will be a proper function i promise");
  }

  function addFunc() {
    console.log("there will be a function i promise");
  }
  const { title, Sunlight, lineTwo, price } = contents;

  return (
    <View style={styles.container}>
      <Image style={styles.thumbnail} source={testImage} />
      <View style={styles.textContents}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.lineOne}>{Sunlight}</Text>
        <Text style={styles.lineTwo}>{lineTwo}</Text>
        <Text style={styles.lineThree}>Price: {price}</Text>
      </View>
      <View>
        <Button
          buttonStyle={styles.favButton}
          title=""
          icon={
            liked
              ? { name: "star", type: "font-awesome" }
              : { name: "star-o", type: "font-awesome" }
          }
          onPress={() => favouriteFunc()}
        />
        <Button
          buttonStyle={styles.addButton}
          title=""
          icon={{ name: "plus", type: "font-awesome" }}
          onPress={() => addFunc()}
        />
      </View>
    </View>
  );
}

export default ResultsListCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#d9d9d9",
    width: "90%",
    marginBottom: "3%",
  },
  textContents: {
    flex: 2,
    flexDirection: "column",
    height: "100%",
    paddingTop: "1%",
    paddingBottom: "1%",
    paddingLeft: "2%",
  },

  titleText: {
    fontFamily: "KronaOne_400Regular",
    fontSize: 16,
  },
  lineOne: {
    fontFamily: "Inter_300Light",

    fontSize: 15,
  },
  lineTwo: {
    fontFamily: "Inter_300Light",
    fontStyle: "italic",
    fontSize: 16,
  },
  lineThree: {
    fontFamily: "Inter_300Light",
    fontSize: 16,
  },
  thumbnail: {
    flex: 1,
    maxWidth: "25%",
    minWidth: "25%",
    height: "100%",
  },
  favButton: {
    borderRadius: 0,
    flex: 3,
    maxWidth: "100%",
    height: 50,
    backgroundColor: "yellow",
  },
  addButton: {
    borderRadius: 0,
    flex: 3,
    maxWidth: "100%",
    height: 50,
    backgroundColor: "#8EC255",
  },
  icon: {
    flex: 1,
    marginLeft: 6,
    maxWidth: "80%",
  },
});
