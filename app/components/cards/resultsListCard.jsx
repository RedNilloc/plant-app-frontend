import { Text, View, StyleSheet, Image, Modal, Pressable } from "react-native";
import { FugazOne_400Regular } from "@expo-google-fonts/fugaz-one";
import { Inter_300Light } from "@expo-google-fonts/inter";
import { KronaOne_400Regular } from "@expo-google-fonts/krona-one";
import { useFonts } from "expo-font";
import { Button } from "react-native-elements";
import { useState } from "react";
import SearchResultsModal from "./cardComponents/SearchResultsModal";

function capitaliseFirstLetter(text) {
  if (text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}

function ResultsListCard({ contents, imgURL }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [liked, setLiked] = useState(false);

  const [fontsLoaded] = useFonts({
    Inter_300Light,
    FugazOne_400Regular,
    KronaOne_400Regular,
  });

  function favouriteFunc() {
    setLiked(!liked);
    console.log("there will be a proper function i promise");
  }

  function addFunc() {
    setModalVisible(true);
    console.log("there will be a function i promise");
  }
  const { default_image, common_name, watering, price } = contents;

  if (contents.watering) {
    return (
      <View style={styles.container}>
        <SearchResultsModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        ></SearchResultsModal>
        <Image style={styles.thumbnail} source={{ uri: default_image }} />
        <View style={styles.textContents}>
          <Text style={styles.titleText}>
            {capitaliseFirstLetter(common_name)}
          </Text>
          <Text style={styles.lineOne}>Watering frequency: {watering}</Text>
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
  } else {
    return (
      <View style={styles.textContents}>
        <Text style={styles.sorry}>Sorry, no plants match your filters</Text>
      </View>
    );
  }
}

export default ResultsListCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#E8F3DD",
    width: "90%",
    marginBottom: "3%",
  },
  textContents: {
    flex: 2,
    flexDirection: "column",
    height: "100%",
    paddingTop: "2%",
    paddingBottom: "1%",
    paddingLeft: "2%",
  },
  titleText: {
    fontFamily: "KronaOne_400Regular",
    fontSize: 16,
    marginBottom: 5,
  },
  sorry: {
    fontFamily: "KronaOne_400Regular",
    fontSize: 26,
    margin: 18,
    textAlign: "center",
  },
  lineOne: {
    fontFamily: "Inter_300Light",
    fontSize: 15,
    marginBottom: 10,
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
});
