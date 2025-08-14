import React from "react"; 
import {Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator} from "react-native";

import { styles } from "./styles";
import logo from "../../assets/logo.png";
import {MaterialIcons} from "@expo/vector-icons";
import { themas } from "../../global/themes";

export default function Login() {
const [email, setEmail] = React.useState("");
const [password, setPassword] = React.useState("");
const [loading, setLoading] = React.useState(false);

async function getLogin() {
    try {
      setLoading(true);
      if (!email  || !password ) {
        return alert("Preencha todos os campos");
      } setTimeout(() => { if(email == "teste@teste.com" && password == "123456"){ alert("Login realizado com sucesso"); }else { alert("Login ou senha incorretos"); }setLoading(false); }, 3000);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.boxTop}>
        <Image source={logo} style={styles.logo} resizeMode="contain"/>
            <Text style={styles.text}>Bem vindo de volta</Text>
          </View>
          <View style={styles.boxMid}>
            <Text style={styles.titleInput}>Email</Text>
            <View style={styles.boxInput}>
              <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Digite seu email" />
              <MaterialIcons name="email" size={20} color={themas.colors.gray} />
            </View>
            <Text style={styles.titleInput}>Senha</Text><View style={styles.boxInput}>
              <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder="Digite sua senha" secureTextEntry />
              <MaterialIcons name="remove-red-eye" size={20} color={themas.colors.gray} />
            </View>
          </View>
          <View style={styles.boxBottom}>
            <TouchableOpacity style={styles.button} onPress={() => getLogin()}>
              {loading ? <ActivityIndicator color={"#fff"} size={"small"} /> : <Text style={styles.buttonText}>Entrar</Text>}
            </TouchableOpacity>
          </View>
        <Text style={styles.textBottom}>Não tem uma conta? <Text style={{color: themas.colors.primary}}>Cadastre-se</Text></Text>
    </View>
    
  );
}   