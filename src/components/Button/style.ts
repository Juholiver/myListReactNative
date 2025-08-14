import { Button, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({

    Button:{
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
    textButton: {
      fontSize: 16,
      color: "white",
      fontWeight: "bold",
    },
    textBottom: {
      fontSize: 16,
      color: themas.colors.gray,
      marginBottom: 50,
    },
});