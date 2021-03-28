import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Image,
  TextInput,
  Text,
  FlatList,
  TouchableHighlight,
  ImageBackground,
} from "react-native";
import axios from "axios";
import Card from "../../components/Card";
import styles from "./styles";

const PUBLIC_KEY = "49cc17dab29810ce2f7d8eb5cb75504a";
const PRIVATE_KEY = "082a21a3c4c4dcdb61ad7f3463051c42f7f1d878";

export default function Home({ navigation }) {
  // const fake = ["a", "b", "c", "d", "e", "f"];
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadCharacters() {
      // const timestamp = 1616821844764;
      const url =
        "https://gateway.marvel.com/v1/public/characters?ts=1616821844764&&apikey=49cc17dab29810ce2f7d8eb5cb75504a&hash=4a94e9e1f9a86d39ba57e4cc961c7b26";
      const response = await axios.get(url);
      setData(response.data.results);
      console.log(response);
    }
    loadCharacters();
  }, []);

  return (
    <SafeAreaView style={styles.header}>
      <Image source={require("../../assets/header.png")} />
      <TextInput
        style={styles.search}
        placeholder="Buscar"
        placeholderTextColor={"#fff"}
      />
      <View style={styles.container}>
        <FlatList
          numColumns={3}
          data={data}
          renderItem={({ data }) => <Card />}
          keyExtractor={(item) => String(item.id)}
        />
      </View>
    </SafeAreaView>
  );
}
