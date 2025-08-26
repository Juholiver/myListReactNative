import React from "react";
import { styles } from "./style";


import { Alert, Text , View, TouchableOpacity} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";


export default function User() {
  const navigation = useNavigation<NavigationProp<any>>();

   const handleLogout = () => {
     // Implement your logout logic here
     Alert.alert("Logout", "Você saiu da conta.");
     return navigation.reset({
       routes: [{ name: "Login" }],
     });
   };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Usuario</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <MaterialIcons name="logout" size={20} color={"#FFF"} />
      </TouchableOpacity>
    </View>
  );
}