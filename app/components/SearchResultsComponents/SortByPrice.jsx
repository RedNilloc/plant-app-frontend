import React, { useState } from "react";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function SortByPrice() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Price (low to high)", value: "price asc" },
    { label: "Price (high to low)", value: "price desc" },
  ]);

  return (
    <View style={{ padding: 20 }}>
      <DropDownPicker
        placeholder="Sort by..."
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={{
          borderRadius: 0,
          borderWidth: 1,
          borderColor: "#8EC255",
        }}
        dropDownContainerStyle={{
          borderRadius: 0,
        }}
      />
    </View>
  );
}
