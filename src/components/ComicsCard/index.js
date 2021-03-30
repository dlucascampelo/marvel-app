import React from "react";
import { ImageBackground, Text, TouchableHighlight, View } from "react-native";

import styles from "./styles";

export default function ComicsCard({ data, navigation }) {
  return (
    <View>
      <TouchableHighlight
        onPress={() => navigation.navigate("ComicsScreen", { data })}
        style={styles.comicsBtn}
        underlayColor={false}
      >
        <ImageBackground
          style={styles.cardImg}
          resizeMode={"cover"}
          source={{
            uri: `${data.thumbnail.path}/portrait_incredible.${data.thumbnail.extension}`,
          }}
        ></ImageBackground>
      </TouchableHighlight>
    </View>
  );
}
