import React from "react"; 
import {Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator} from "react-native";

import { styles } from "./styles";
import logo from "../../assets/logo.png";
import {MaterialIcons, Octicons} from "@expo/vector-icons";
import { themas } from "../../global/themes";
import { Input } from "../../components/input";
import { Button } from "../../components/Button";

export default function Login() {
const [email, setEmail] = React.useState("");
const [password, setPassword] = React.useState("");
const [showPassword, setShowPassword] = React.useState(true);
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
            <Input
              value={email}
              onChangeText={setEmail}
              title="Email"
              IconRight={MaterialIcons}
              iconRightName="email"
            />
            <Input
              value={password}
              onChangeText={setPassword}
              title="Senha "
              IconRight={MaterialIcons}
              iconRightName="remove-red-eye"
              secureTextEntry={showPassword}
              onIconRightPress={() => setShowPassword(!showPassword)}
            />
          </View>
          <View style={styles.boxBottom}>
            <Button 
              text="Entrar" 
              loading={loading}
              onPress={() => getLogin()}
            />
          </View>
        <Text style={styles.textBottom}>Não tem uma conta? <Text style={{color: themas.colors.primary}}>Cadastre-se</Text></Text>
    </View>
    
  );
}   