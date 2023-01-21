import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const LibraryScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return <Text>LibraryScreen</Text>;
};

export default LibraryScreen;

styles = StyleSheet.create({});
