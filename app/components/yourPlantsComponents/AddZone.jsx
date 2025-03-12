import { View, StyleSheet } from "react-native";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

export default function AddZoneToYourPlants() {
  const [open, setOpen] = useState(false);
  const [sunLightValue, setSunLightValue] = useState(null);
  const [locationValue, setlocationValue] = useState(null);
  const [zoneName, setZoneName] = useState(null);
  const [sunLightItems, setSunLightItems] = useState([
    { label: "Full shade", value: "full shade" },
    { label: "Full sun", value: "full sun" },
    { label: "Filtered shade", value: "filtered shade" },
    { label: "Part sun/part shade", value: "part sun/part shade" },
  ]);

  const [locationItems, setlocationItems] = useState([
    { label: "Indoor", value: "true" },
    { label: "Outdoor", value: "false" },
  ]);

  const handleSunLevel = () => {
    setSunLightItems(sunLightValue);
  };

  const handleZoneName = (text) => {
    setZoneName(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Zone..."
        value={zoneName}
        onChangeText={handleZoneName}
      />
      <DropDownPicker
        placeholder="Select light level"
        style={styles.dropdown}
        open={open}
        value={sunLightValue}
        items={sunLightItems}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setSunLightItems}
        zIndex={1000}
        zIndexInverse={1000}
        dropDownDirection="BOTTOM"
        dropDownContainerStyle={{
          backgroundColor: "#FFFFFF",
        }}
        textStyle={{
          fontSize: 16,
        }}
        onChangeValue={(value) => {
          params.sunlight = value;
        }}
      />
      <DropDownPicker
        placeholder="Indoor or Outdoor?"
        style={styles.dropdown}
        open={open}
        value={locationValue}
        items={locationItems}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setlocationItems}
        zIndex={3000}
        zIndexInverse={1000}
        dropDownDirection="BOTTOM"
        textStyle={{
          fontSize: 16,
        }}
        onChangeValue={(value) => {
          params.tropical = value;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },
  dropdown: {
    marginLeft: 50,
    marginRight: 50,
    width: 290,
    backgroundColor: "#FFFFFF",
    borderColor: "#8EC255",
    paddingTop: "0%",
    paddingBottom: "0%",
    borderRadius: 0,
  },
});
