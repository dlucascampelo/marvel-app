import React from "react";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#2c2c2c",
  },
  comicImg: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 330,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 1,
  },
  comicName: {
    marginTop: 10,
    marginBottom: 5,
    color: "#fff",
    textAlign: "center",
    fontSize: 22,
  },
  comicDescription: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
});

export default styles;
