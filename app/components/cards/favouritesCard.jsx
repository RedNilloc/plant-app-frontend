import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FugazOne_400Regular } from "@expo-google-fonts/fugaz-one";
import { Inter_400Regular, Inter_300Light } from "@expo-google-fonts/inter";
import { KronaOne_400Regular } from "@expo-google-fonts/krona-one";
import { useFonts } from "expo-font";
import { useIndividualPlant } from "../../contexts/individualPlantContext";
import { router } from "expo-router";

function capitaliseFirstLetter(text) {
  if (text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}

function NoButtonCard({ contents }) {
  const { plant } = useIndividualPlant();

  const [fontsLoaded] = useFonts({
    Inter_300Light,
    FugazOne_400Regular,
    KronaOne_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  const { title, lineOne, lineTwo, lineThree, imgUrl } = contents;

  function handlePress() {
    plant.id = contents.plantId;
    router.push("/pages/individualPlantPage");
  }

  return (
    <TouchableOpacity style={styles.container} onPress={() => handlePress()}>
      <Image style={styles.thumbnail} source={{ uri: imgUrl }} />
      <View style={styles.textContents}>
        <Text numberOfLines={1} style={styles.titleText}>
          {capitaliseFirstLetter(title)}
        </Text>
        <Text numberOfLines={1} style={styles.lineOne}>
          {lineOne}
        </Text>
        <Text numberOfLines={1} style={styles.lineTwo}>
          {lineTwo}
        </Text>
        <Text numberOfLines={1} style={styles.lineThree}>
          {lineThree}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default NoButtonCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#E8F3DD",
    width: "80%",
    Height: "5.5rem",
    marginBottom: "3%",
  },
  textContents: {
    flex: 2,
    flexDirection: "column",
    height: "100%",
    paddingTop: "1%",
    paddingBottom: "1%",
    paddingLeft: "2%",
    paddingRight: "2%",
  },

  titleText: {
    fontFamily: "KronaOne_400Regular",
    fontSize: 16,
  },
  lineOne: {
    fontFamily: "Inter_300Light",
    fontStyle: "italic",
    fontSize: 16,
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
});
