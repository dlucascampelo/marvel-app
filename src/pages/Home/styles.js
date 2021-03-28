import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#2c2c2c",
    height: "20%",
  },
  search: {
    height: 40,
    width: "65%",
    paddingHorizontal: 20,
    fontSize: 18,
    color: "#fff",
    backgroundColor: "#525050",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  container: {
    alignItems: "center",
    width: "100%",
    paddingHorizontal: "2%",
    marginVertical: "10%",
  },
  cardImg: {
    alignItems: "center",
    justifyContent: "flex-end",
    width: 92,
    height: 166,
    margin: 10,
    borderRadius: 8,
    overflow: "hidden",
  },
  cardText: {
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "rgba(44, 44, 44, 0.7)",
    width: "100%",
    height: "25%",
    color: "#fff",
  },
});
export default styles;
