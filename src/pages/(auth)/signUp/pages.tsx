
import React, { useState } from "react";

import { View, Text, StyleSheet, ScrollView, Dimensions, Pressable, SafeAreaView, } from "react-native";
import { Input } from "../../../components/input";
import { themas } from "../../../global/themes";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    function handleSignUp() {
        console.log("SignUp", { name, email, password });
    }

    const navigation = useNavigation(); // Hook para retornar na pagina
  return (
    <SafeAreaView style={{ flex: 1}}>
        <ScrollView style={{ flex: 1, backgroundColor: "#fff"}}>
        <View style={styles.container}>
            <View style={styles.boxTop}>
                <Pressable style={styles.buttonBack}
                onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
                </Pressable>
                <Text style={styles.text}>Crie uma conta</Text>
            </View>
            <View style={styles.boxMid}>
                <Input
                title="Nome:"
                iconRightName="name"
                value={name}
                onChangeText={setName}
                />
                <Input
                title="Email:"
                iconRightName="email"
                value={email}
                onChangeText={setEmail}
                />
                <Input
                title="Senha:"
                iconRightName="lock"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                />
            </View>
            <View style={styles.boxBottom}>
                <Pressable style={styles.button}
                    onPress={handleSignUp}>
                    <Text style={styles.buttonText}>Cadastre-se</Text>
                </Pressable>
            </View>

        </View>
        </ScrollView>
    </SafeAreaView>
  );
}
    
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
      justifyContent: "center",
      marginTop: 20,
      
    },
    logo: {
      width: 80,
      height: 80,
    },
    text: {
      backgroundColor: "transparent",
      color: themas.colors.primary,
      fontWeight: "bold",
      textAlign: "center",
      marginTop: 40,
      fontSize: 18,
    },
    button:{
        backgroundColor: themas.colors.primary,
      width: 250,
      height: 50,
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
      marginBottom: 10,
    },
    buttonBack: {
        backgroundColor: "rgba(255,255,255, 0.55)",
        alignSelf: "flex-start",
        padding: 8,
        borderRadius: 8,
        marginBottom: 8,
    },
});
