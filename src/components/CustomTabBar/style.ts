import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";


export const style = StyleSheet.create({
  tabArea: {
    flexDirection: "row",
    height: 80,
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset:{  
        width:0,
        height:3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    
  },

  tabItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },

  tabItemButton: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
    backgroundColor: themas.colors.primary,
    top: -30,
    zIndex: 9999,
    
  }
});