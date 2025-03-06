import { View, StyleSheet } from "react-native";
import { useState } from "react";

import DropDownPicker from "react-native-dropdown-picker";

export default function SunlightLevel() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Full shade", value: "full shade" },
    { label: "Full sun", value: "full sun" },
    { label: "Filtered shade", value: "filtered shade" },
    { label: "Part sun/part shade", value: "part sun/part shade" },
  ]);
  const [sunLevel, setSunLevel] = useState("any");
  return (
    <View style={styles.container}>
      <DropDownPicker
        placeholder="Select light level"
        style={styles.dropdown}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        zIndex={1000}
        zIndexInverse={1000}
        dropDownDirection="BOTTOM"
        dropDownContainerStyle={{
          backgroundColor: "#FFFFFF",
          marginLeft: 50,
          marginRight: 50,
          width: 290,
          borderRadius: 0,
        }}
        textStyle={{
          fontSize: 16,
        }}
        onChangeValue={(value) => {
          setSunLevel(value);
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
