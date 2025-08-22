import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
    boxTop: {
      height: Dimensions.get("window").height / 3,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
    boxMid: {
      height: Dimensions.get("window").height / 4,
      width: "100%",
      paddingHorizontal: 37,
    },
    boxBottom: {
      height: Dimensions.get("window").height / 3,
      width: "100%",
      alignItems: "center",
    },
    logo: {
      width: 80,
      height: 80,
    },
    text: {
      fontWeight: "bold",
      marginTop: 40,
      fontSize: 18,
    },
    button:{
      width: 250,
      height: 50,
      backgroundColor: themas.colors.primary,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 40,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
    },
    buttonText: {
      fontSize: 16,
      color: "white",
      fontWeight: "bold",
    },
    textBottom: {
      fontSize: 16,
      color: themas.colors.gray,
      marginBottom: 50,
    },
    buttonCreateAccount: {
      marginTop: 20,
    },
});
