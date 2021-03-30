import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableHighlight,
} from "react-native";
import api from "../../services/api";
import ComicsCard from "../../components/ComicsCard";
// import LinearGradient from "react-native-linear-gradient";

import styles from "./styles";

export default function CharacterScreen({ route, navigation }) {
  const { data } = route.params;
  const [comics, setComics] = useState([]);
  useEffect(() => {
    async function loadComics() {
      const url = `/characters/${data.id}/comics?`;
      const response = await api.get(url);
      setComics(response.data.data.results);
    }
    loadComics();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.characterImg}
        source={{
          uri: `${data.thumbnail.path}.${data.thumbnail.extension}`,
        }}
      />

      <Text style={styles.characterName}>{data.name || data.title}</Text>
      <Text style={styles.characterDescription}>{data.description}</Text>
      <View style={styles.characterList}>
        <FlatList
          style={{ marginTop: 10 }}
          horizontal={true}
          data={comics}
          renderItem={({ item }) => (
            <ComicsCard data={item} navigation={navigation} />
          )}
          keyExtractor={(item) => String(item.id)}
        />
      </View>
    </ScrollView>
  );
}
