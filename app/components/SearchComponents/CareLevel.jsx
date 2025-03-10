import { View, StyleSheet } from "react-native";
import { useState } from "react";
import { useSearch } from "../../contexts/searchContext";
import DropDownPicker from "react-native-dropdown-picker";

function CareLevel() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Any", value: "any" },
    { label: "Low", value: "low" },
    { label: "Medium", value: "moderate" },
    { label: "High", value: "high" },
  ]);
  const { params } = useSearch();
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
          width: 290,
          borderRadius: 0,
        }}
        textStyle={{
          fontSize: 16,
        }}
        onChangeValue={(value) => {
          params.maintenance = value;
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
    width: 290,
    backgroundColor: "#FFFFFF",
    borderColor: "#8EC255",
    paddingTop: "0%",
    paddingBottom: "0%",
    borderRadius: 0,
  },
});

export default CareLevel;
