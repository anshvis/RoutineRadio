import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import AlbumsHorizontal from "../components/AlbumHorizontal";

import heavyRotation from "../mockdata/heavyRotation.json";
import jumpBackIn from "../mockdata/jumpBackIn.json";
import recentlyPlayed from "../mockdata/recentlyPlayed.json";

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.subContainer}>
          <Header />
        </View>
        <View style={styles.row}>
          <Text style={styles.firstText}>
            Your new playlist!/Help us out...
          </Text>
          <AlbumsHorizontal data={recentlyPlayed} />
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Popular Playlists</Text>
          <AlbumsHorizontal
            data={heavyRotation}
            tagline="For where you may be going"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Tracks for you</Text>
          <AlbumsHorizontal
            data={jumpBackIn}
            tagline="Based on what you've been listening to"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    paddingRight: 15,
    paddingLeft: 17,
    paddingBottom: 15,
  },
  row: {
    paddingBottom: 25,
  },
  text: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingBottom: 8,
  },
  firstText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingBottom: 12,
  },
});
