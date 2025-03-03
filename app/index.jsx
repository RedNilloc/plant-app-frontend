import { Text, View } from "react-native";
import Search from "./pages/Search";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>

      <Search></Search>
    </View>
  );
}
