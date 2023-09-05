import React from "react";
import { StyleSheet, SafeAreaView, View, ScrollView, Text } from "react-native";
import { icons } from "./src/IconRegistry";
import { RadixIcon } from "./src";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          padding: 24,
          fontSize: 24,
        }}
      >
        Radix UI Icons for React Native
      </Text>
      <ScrollView>
        <View style={styles.row}>
          {Object.keys(icons).map((iconName, index) => (
            <View key={index} style={styles.iconContainer}>
              <RadixIcon name={iconName} size={28} color="black" />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    padding: 24,
  },
  iconContainer: {
    width: 40,
    margin: 8,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
