import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";

import { RadixIcon } from "radix-ui-react-native-icons";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <RadixIcon name="margin" size={124} color="black" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    width: "100%",
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 12,
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: {
    color: "black",
  },
});
