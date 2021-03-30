import React from "react";
import { ImageBackground, Text, TouchableHighlight, View } from "react-native";

import styles from "./styles";

export default function Card({ data, navigation }) {
  return (
    <TouchableHighlight
      onPress={() => navigation.navigate("CharacterScreen", { data })}
      style={styles.characterBtn}
      underlayColor={false}
    >
      <ImageBackground
        style={styles.cardImg}
        resizeMode={"cover"}
        source={{
          uri: `${data.thumbnail.path}/portrait_incredible.${data.thumbnail.extension}`,
        }}
      >
        <Text style={styles.cardText}>{data.name}</Text>
      </ImageBackground>
    </TouchableHighlight>
  );
}
