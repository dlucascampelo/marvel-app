import React from "react";
import { ImageBackground, Text, TouchableHighlight, View } from "react-native";

import styles from "./styles";

export default function Card({ data, navigation }) {
  console.log(data);
  return (
    <TouchableHighlight>
      <ImageBackground
        style={styles.cardImg}
        resizeMode={"cover"}
        source={{
          uri: `${data.thumbnail.path}portrait_small.${data.thumbnail.extension}`,
        }}
      >
        <Text style={styles.cardText}>{data.name}</Text>
      </ImageBackground>
    </TouchableHighlight>
  );
}
