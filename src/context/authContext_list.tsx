import React, {createContext, useContext, useEffect,} from "react";
import { Text, View, Dimensions , StyleSheet, TouchableOpacity} from "react-native";
import { Modalize } from 'react-native-modalize';
import {MaterialIcons}  from "@expo/vector-icons"
import { Input } from "../components/input";


export const AuthContextList:any = React.createContext({})

export const AuthProviderList = (props:any):any => {
  const modalizeRef = React.useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef?.current?.open();
  };

  useEffect(() => {
    onOpen();
  }, []);

  const _container = () => {
    return (
      <View style={style.container}>
        <View style={style.header}>
          <TouchableOpacity>
            <MaterialIcons name="close" size={30} />
          </TouchableOpacity>
          <Text style={style.title}>Criar tarefa</Text>
          <TouchableOpacity>
            <MaterialIcons name="check" size={30} />
          </TouchableOpacity>
        </View>
        <View style={style.content}>
          <Input title="Titulo:" labelStyle={style.label} />
          <Input title="Descricao" labelStyle={style.label} height={100} multiline numberOfLines={5} />

          <View style={{width: "40%"}}>
            <Input title="Tempo Limite" labelStyle={style.label} />
          </View>
          <View style={style.containerFlag}>
            <Text style={style.label}>Flag</Text>
            <View style={{}}>

            </View>

          </View>
        </View>
      </View>
    );
  };

  return (
    <AuthContextList.Provider value={{onOpen}}>
      {props.children}
      <Modalize
        ref={modalizeRef}
        modalHeight={Dimensions.get("window").height / 1.3}
      >
        {_container()}
      </Modalize>
    </AuthContextList.Provider>
  );
};

export const useAuth = () => useContext(AuthContextList);

export const style = StyleSheet.create({
  container: {
    width: "100%",
  },
  header: {
    width: "100%",  
    height: 40,
    paddingHorizontal: 40,
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title:{
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    width: "100%",
    paddingHorizontal: 20,
  },
  containerFlag:{
    width: "100%",
    padding: 20,
    
  },
  label:{
    fontWeight: "bold",
    padding: 10,
  }
  
});