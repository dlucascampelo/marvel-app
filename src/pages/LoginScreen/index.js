import React from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImg}
        source={require("../../assets/background.png")}
      ></ImageBackground>
      <Image
        style={styles.logo}
        source={require("../../assets/logo.png")}
      ></Image>

      <SafeAreaView style={styles.login}>
        <TextInput style={styles.input} label="name" placeholder="Nome" />
        <TextInput style={styles.input} label="email" placeholder="Email" />
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.enterApp}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.enterAppText}>Entrar</Text>
        </TouchableOpacity>
      </SafeAreaView>

      <Text style={styles.credits}>
        Data provided by Marvel. © 2014 Marvel{" "}
      </Text>
    </View>
  );
}
