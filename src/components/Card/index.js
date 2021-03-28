import React from "react";
import { ImageBackground, Text, TouchableHighlight, View } from "react-native";

import styles from "./styles";

export default function Card({ data, navigation }) {
  return (
    <TouchableHighlight>
      <ImageBackground
        style={styles.cardImg}
        resizeMode={"cover"}
        source={{
          uri: `${data.results.thumbnail.path}.${data.results.thumbnail.extension}`,
        }}
      >
        <Text style={styles.cardText}>{data.name}</Text>
      </ImageBackground>
    </TouchableHighlight>
  );
}
