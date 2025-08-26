import { StyleSheet, Dimensions } from "react-native";
import {themas } from "../../global/themes";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        

    },
    header: {
        width: "100%",
        height: Dimensions.get("window").height / 6,
        paddingHorizontal: 20,
        justifyContent: "center",
        backgroundColor: themas.colors.primary
    },
    greeting: {
        fontSize: 20,
        color: "white",
        marginTop: 20,
    },
    boxInput:{
        width: "80%",
        
    },

    boxList: {
        flex: 1,
        width: "100%",
        
    },
    card: {
        width: "100%",
        minHeight: 60,
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        marginTop: 6,
        justifyContent: "center",
        borderWidth: 1,
        borderColor: themas.colors.lightGray,
    },
    rowCard:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    rowCardLeft:{
        width: "70%",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },

    titleCard:{
      fontSize: 16,
      fontWeight: "bold"

   },
   descriptionCard:{
      color: themas.colors.gray,
   },
   button:{
     backgroundColor: themas.colors.red,
     borderRadius: 10,
     alignItems: "center",
     justifyContent: "center",  
     width: 100,
     marginVertical: 10,
   },
   buttonEdit:{
     backgroundColor: themas.colors.blueLigth,
     borderRadius: 10,
     alignItems: "center",
     justifyContent: "center",  
     width: 100,
     marginVertical: 10,
   }
});