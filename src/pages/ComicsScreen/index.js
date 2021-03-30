import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  ImageBackground,
} from "react-native";
import api from "../../services/api";
import styles from "./styles";
import ComicsCard from "../../components/ComicsCard";

export default function ComicsScreen({ route, navigation }) {
  const { data } = route.params;
  const [chars, setChars] = useState([]);

  useEffect(() => {
    async function loadComics() {
      const url = `/comics/${data.id}?`;
      const response = await api.get(url);
      setChars(response.data.data.results);
      console.log(response.data.data.results);
    }
    loadComics();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Image
        resizeMode={"contain"}
        style={styles.comicImg}
        source={{
          uri: `${data.thumbnail.path}/portrait_incredible.${data.thumbnail.extension}`,
        }}
      />
      <Text style={styles.comicName}>{data.title}</Text>
      <Text style={styles.comicDescription}></Text>

      <Text style={styles.comicDescription}>{data.description}</Text>

      <View style={styles.comicList}>
        <FlatList
          style={{ marginTop: 10 }}
          horizontal={true}
          data={chars}
          renderItem={({ item }) => (
            <ComicsCard data={item} navigation={navigation} />
          )}
          keyExtractor={(item) => String(item.id)}
        />
      </View>
    </ScrollView>
  );
}
