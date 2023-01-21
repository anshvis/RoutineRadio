import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Header = () => {
  return (
    <View style={styles.topCont}>
      <View>
        <Text style={styles.text}>Welcome back!</Text>
      </View>
      <View style={styles.iconCont}>
        <MaterialIcons
          style={styles.icon}
          name="search"
          size={30}
          color="black"
        />
        <MaterialCommunityIcons
          style={styles.icon}
          name="bell-outline"
          size={30}
          color="black"
        />

        <MaterialCommunityIcons
          style={styles.icon}
          name="cog-outline"
          size={30}
          color="black"
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  topCont: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 25,
    paddingBottom: 20,
    justifyContent: "space-between",
  },
  text: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
  },
  iconCont: {
    flexDirection: "row",
    marginRight: 3,
  },
  icon: {
    marginLeft: 12,
  },
});
