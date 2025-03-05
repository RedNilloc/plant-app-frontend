import { Text, View, StyleSheet, Image, Modal, Pressable } from "react-native";
import { FugazOne_400Regular } from "@expo-google-fonts/fugaz-one";
import { Inter_300Light } from "@expo-google-fonts/inter";
import { KronaOne_400Regular } from "@expo-google-fonts/krona-one";
import { useFonts } from "expo-font";
import testImage from "./test-sunflower.jpg";
import { Button } from "react-native-elements";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

function ResultsListCard({ contents, imgURL }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [liked, setLiked] = useState(false);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Balcony", value: "balcony" },
    { label: "Living room", value: "living room" },
  ]);

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
  const { title, Sunlight, lineTwo, price } = contents;

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>X</Text>
            </Pressable>
            <Text style={styles.modalText}>Add plant to</Text>
            <View style={styles.container}>
              <DropDownPicker
                placeholder="Select habitat"
                style={styles.dropdown}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                zIndex={3000}
                zIndexInverse={1000}
                dropDownDirection="BOTTOM"
                dropDownContainerStyle={{
                  backgroundColor: "#FFFFFF",
                  marginRight: 50,
                  width: 255,
                  borderRadius: 0,
                }}
                textStyle={{
                  fontSize: 16,
                }}
              />
            </View>
            <Pressable
              style={[styles.buttonYes]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Yes</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    width: 350,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    borderRadius: 0,
    padding: 4,
    margin: 2,
    marginLeft: 260,
    backgroundColor: "#e65544",
  },
  buttonYes: {
    borderRadius: 0,
    padding: 4,
    margin: 2,
    backgroundColor: "#8EC255",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  dropdown: {
    width: 255,
    backgroundColor: "#FFFFFF",
    borderColor: "#8EC255",
    paddingTop: "0%",
    paddingBottom: "0%",
    borderRadius: 0,
  },
});
