import { View, StyleSheet } from "react-native";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { useSearch } from "../../contexts/searchContext";

function IndoorOutdoor() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Any", value: "any" },
    { label: "Indoor only", value: "true" },
    { label: "Outdoor compatible", value: "false" },
  ]);

  const { params } = useSearch();

  return (
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
          marginLeft: 50,
          marginRight: 50,
          width: 290,
          borderRadius: 0,
        }}
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

export default IndoorOutdoor;
