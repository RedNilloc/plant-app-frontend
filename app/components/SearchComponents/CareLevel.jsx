import { View, StyleSheet } from "react-native";
import { useState } from "react";

import DropDownPicker from "react-native-dropdown-picker";

function CareLevel() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Low", value: "low" },
    { label: "Medium", value: "medium" },
    { label: "High", value: "high" },
  ]);

  return (
    <View style={styles.container}>
      <DropDownPicker
        placeholder="Select maintenance"
        style={styles.dropdown}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        zIndex={2000}
        zIndexInverse={500}
        dropDownDirection="BOTTOM"
        dropDownContainerStyle={{
          backgroundColor: "#FFFFFF",
          marginLeft: 50,
          marginRight: 50,
          width: 220,
        }}
        textStyle={{
          fontSize: 16,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
  },
  dropdown: {
    marginLeft: 50,
    marginRight: 50,
    width: 220,
    backgroundColor: "#FFFFFF",
    borderColor: "#8EC255",
    paddingTop: "0%",
    paddingBottom: "0%",
  },
});

export default CareLevel;
