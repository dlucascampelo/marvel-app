import React from "react";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#2c2c2c",
  },
  characterImg: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 318,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 1,
  },
  characterName: {
    marginTop: 10,
    marginBottom: 5,
    color: "#fff",
    textAlign: "center",
    fontSize: 22,
  },
  characterDescription: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
});

export default styles;
