import { View, StyleSheet } from "react-native";
import { useState } from "react";

import DropDownPicker from "react-native-dropdown-picker";

export default function SunlightLevel() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Full shade", value: "full shade" },
    { label: "Full sun", value: "full sun" },
    { label: "Deep shade", value: "deep shade" },
    { label: "Part shade", value: "part shade" },
    { label: "Filtered shade", value: "filtered shade" },
    { label: "pPart sun/part shade", value: "part sun/part shade" },
  ]);

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
    marginTop: 5,
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
