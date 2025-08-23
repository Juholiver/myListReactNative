import React from "react"; 
import {Text, View, Image, TouchableOpacity} from "react-native";
import { Link } from "@react-navigation/native";

import { styles } from "./styles";
import logo from "../../assets/logo.png";
import {MaterialIcons} from "@expo/vector-icons";
import { themas } from "../../global/themes";
import { Input } from "../../components/input";
import { Button } from "../../components/Button";
import { useNavigation, NavigationProp, } from "@react-navigation/native";
import { supabase } from "../../Lib/supabase";

export default function Login() {

  const navigation = useNavigation<NavigationProp<any>>();

  const goToSignUp = () => {
    navigation.navigate("SignUp");
  };

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  async function handleSignIn() {
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    });

    if (error) {
      alert("Erro ao fazer login");
      setLoading(false);
      return;
    }

    setLoading(false);
    navigation.reset({ routes: [{ name: "BottomRoutes" }] });
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
              onPress={handleSignIn}
            />
        </View>
        <TouchableOpacity
          style={styles.buttonCreateAccount}
          onPress={goToSignUp}
        >
          <Text style={styles.textBottom}>Não tem uma conta? <Text style={{color: themas.colors.primary}}>Cadastre-se</Text></Text>
        </TouchableOpacity>
      </View>

  );
}
