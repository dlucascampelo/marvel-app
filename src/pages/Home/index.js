import React, { useState, useEffect } from "react";
import { API_KEY, TS, HASH } from "@env";
import api from "../../services/api";
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

export default function Home({ navigation }) {
  // const fake = ["a", "b", "c", "d", "e", "f"];
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadCharacters() {
      const url = `/characters?orderBy=name&limit=100;`;
      const response = await api.get(url);
      setData(response.data.data.results);
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
          renderItem={({ item }) => (
            <Card data={item} navigation={navigation} />
          )}
          keyExtractor={(item) => String(item.id)}
        />
      </View>
    </SafeAreaView>
  );
}
