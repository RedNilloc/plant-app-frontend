import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Switch,
} from "react-native";
import PZHeader from "../components/header";
import PZFooter from "../components/footer";
import { useState } from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function Settings() {
  const sections = [
    {
      header: "Personal ",
      items: [
        {
          id: "password",
          icon: "user",
          label: "Change Password",
          type: "link",
        },
      ],
    },
    {
      header: "Preferences",
      items: [
        {
          id: "notifications",
          icon: "bell",
          label: "Notifications",
          type: "toggle",
        },
        {
          id: "location",
          icon: "location-dot",
          label: "Location",
          type: "toggle",
        },
        {
          id: "wifi",
          icon: "wifi",
          label: "Use Wi-Fi",
          type: "toggle",
        },
      ],
    },
    {
      header: "Support",
      items: [
        { id: "bug", icon: "bug", label: "Report Bug", type: "link" },
        { id: "contact", icon: "envelope", label: "Contact Us", type: "link" },
      ],
    },
  ];

  const [form, setForm] = useState({
    notifications: false,
    location: true,
    wifi: true,
  });

  return (
    <View style={{ height: "100%", backgroundColor: "#ffffff" }}>
      <SafeAreaView style={styles.sav}>
        <ScrollView bounces={false}>
          <PZHeader>Settings</PZHeader>
          <View style={styles.pageContent}>
            {sections.map(({ header, items }) => (
              <View style={styles.section} key={header}>
                <View style={styles.sectionHeader}>
                  <Text style={styles.textSectionHeader}>{header}</Text>
                </View>

                <View style={styles.sectionBody}>
                  {items.map(({ label, id, type, icon }, index) => (
                    <View
                      style={[
                        styles.rowWrapper,
                        index === 0 && { borderTopWidth: 0 },
                      ]}
                      key={id}
                    >
                      <TouchableOpacity
                        onPress={() => {
                          // handle button
                        }}
                      >
                        <View style={styles.row}>
                          <FontAwesome6
                            name={icon}
                            size={20}
                            color="#616161"
                            style={{ marginRight: 12 }}
                          />
                          <Text styles={styles.rowLabel}>{label}</Text>

                          <View style={styles.rowSpacer} />

                          {type === "toggle" && (
                            <Switch
                              value={form[id]}
                              onValueChange={(value) =>
                                setForm({ ...form, [id]: value })
                              }
                            />
                          )}

                          {["link"].includes(type) && (
                            <FontAwesome6
                              name="chevron-right"
                              size={18}
                              color="#ababab"
                            />
                          )}
                        </View>
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              </View>
            ))}
            <View style={styles.buttonContainer}></View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                // handle logout functionality
              }}
            >
              <Text style={styles.buttonText}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
      <PZFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  sav: { flex: 0, backgroundColor: "#222926" },
  pageContent: {
    paddingTop: "5%",
    backgroundColor: "#ffffff",
    paddingBottom: "20%",
  },
  section: {
    paddingTop: 12,
  },
  sectionHeader: {
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  textSectionHeader: {
    fontSize: 16,
    fontWeight: "600",
    color: "#a7a7a7",
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },
  rowWrapper: {
    paddingLeft: 24,
    borderTopWidth: 1,
    borderColor: "#e3e3e3",
    backgroundColor: "#f5f5f5",
  },
  row: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingRight: 24,
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: "500",
    color: "#000",
  },
  rowSpacer: {
    flex: 1,
  },
  rowValue: {
    fontSize: 17,
    color: "#616161",
    marginRight: 4,
  },
  buttonContainer: {
    marginTop: 45,
  },
  button: {
    alignItems: "center",
    height: 50,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
  },
  buttonText: {
    color: "#6CA431",
    fontWeight: "600",
  },
});
