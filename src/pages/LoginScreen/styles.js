import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImg: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
  logo: {
    marginBottom: 15,
    height: 70,
    width: 150,
    resizeMode: "stretch",
  },
  input: {
    height: 50,
    width: 250,
    margin: 15,
    padding: 10,
    fontSize: 18,
    color: "#2c2c2c",
    backgroundColor: "#fff",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  enterApp: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ED1D24",
    height: 48,
    width: 170,
    marginTop: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  enterAppText: {
    color: "#fff",
    fontSize: 22,
  },
  credits: {
    color: "#fff",
    fontSize: 12,
    position: "absolute",
    bottom: 2,
  },
});
export default styles;
