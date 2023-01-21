import * as React from "react";
import PropTypes from "prop-types";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const AlbumsHorizontal = ({ data, heading, tagline }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {heading && <Text style={styles.heading}>{heading}</Text>}
      {tagline && <Text style={styles.tagline}>{tagline}</Text>}

      <FlatList
        contentContainerStyle={styles.containerContent}
        data={data}
        horizontal
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
            onPress={() => navigation.navigate("Album", { title: item.title })}
            style={styles.item}
          >
            <View style={styles.image}></View>
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

AlbumsHorizontal.defaultProps = {
  heading: null,
  tagline: null,
};

AlbumsHorizontal.propTypes = {
  // required
  data: PropTypes.array.isRequired,

  // optional
  heading: PropTypes.string,
  tagline: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  containerContent: {
    paddingLeft: 16,
  },
  tagline: {
    color: "grey",
    paddingBottom: 6,
    textAlign: "center",
  },
  item: {
    marginRight: 16,
    width: 148,
  },
  image: {
    backgroundColor: "grey",
    height: 148,
    width: 148,
  },
  title: {
    color: "black",
    marginTop: 4,
    textAlign: "center",
  },
});

export default AlbumsHorizontal;
