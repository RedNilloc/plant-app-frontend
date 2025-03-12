import { View, StyleSheet } from "react-native";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

function IndoorOutdoor() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Indoor", value: "true" },
    { label: "Outdoor", value: "false" },
  ]);

  return (
    <View style={styles.container}>
      <DropDownPicker
        placeholder="Indoor or Outdoor?"
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
  dropdown: {
    // marginLeft: 50,
    // marginRight: 50,
    // width: 50,
    backgroundColor: "#FFFFFF",
    borderColor: "#8EC255",
    // paddingTop: "0%",
    // paddingBottom: "0%",
    // borderRadius: 0,
  },
});

export default IndoorOutdoor;
