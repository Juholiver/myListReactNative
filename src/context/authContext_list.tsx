import React, {createContext, useContext, useEffect,} from "react";
import { Text, View, Dimensions , StyleSheet, TouchableOpacity} from "react-native";
import { Modalize } from 'react-native-modalize';
import {MaterialIcons}  from "@expo/vector-icons"
import { Input } from "../components/input";
import { themas } from "../global/themes";
import { Flag } from "../components/Flag";
import CustomDateTimePicker from "../components/CustomDateTimePicker";

export const AuthContextList:any = React.createContext({})

const flags = [
  {caption: "urgente", Color: themas.colors.red},
  {caption: "opcional", Color: themas.colors.blueLigth},
]

export const AuthProviderList = (props:any):any => {
  const modalizeRef = React.useRef<Modalize>(null);
  const [title,setTitle] = React.useState("");
  const [description,setDescription] = React.useState("");
  const [selectedFlag,setSelectedFlag] = React.useState("Urgente");
  const [selectedDate,setSelectedDate] = React.useState(new Date());
  const [selectedTime,setSelectedTime] = React.useState(new Date());
  const [showDatePicker, setShowDatePicker] = React.useState(false);
  const [showTimePicker, setShowTimePicker] = React.useState(false);

  const onOpen = () => {
    modalizeRef?.current?.open();
  };

  const onClose = () => {
    modalizeRef?.current?.close();
  };

  useEffect(() => {
    onOpen();
  }, []);

const _renderFlags = () => {
    return (
      flags.map((item, index) => (
          <TouchableOpacity key={index}>
            <Flag caption={item.caption} color={item.Color} selected={true} />
          </TouchableOpacity>
        ))
    );
  };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };
  const handleTimeChange = (date: Date) => {
    setSelectedTime(date);
  };

  const _container = () => {
    return (
      <View style={style.container}>
        <View style={style.header}>
          <TouchableOpacity onPress={() => onClose()}>
            <MaterialIcons name="close" size={30} />
          </TouchableOpacity>
          <Text style={style.title}>Criar tarefa</Text>
          <TouchableOpacity>
            <MaterialIcons name="check" size={30} />
          </TouchableOpacity>
        </View>
        <View style={style.content}>
          <Input title="Titulo:" labelStyle={style.label} value={title} onChangeText={setTitle} />
          <Input title="Descricao" labelStyle={style.label} height={100} multiline numberOfLines={5} value={description} onChangeText={setDescription} textAlignVertical="top" />

          <View style={{width: "40%"}}>
            <View style={{flexDirection: "row", gap: 10,width: "100%"}}>
              <TouchableOpacity onPress={() => setShowDatePicker(true)} style={{width: 200}}>
                <Input title="Data Limite:" labelStyle={style.label} editable={false} value={selectedDate.toLocaleDateString()} />
              </TouchableOpacity>
              <TouchableOpacity style={{width: 120}} onPress={() => setShowTimePicker(true)}>
                <Input title="Hora Limite:" labelStyle={style.label} editable={false} value={selectedTime.toLocaleTimeString()} />
              </TouchableOpacity>
            </View>
            <CustomDateTimePicker onDateChange={handleDateChange} setshow={setShowDatePicker} show={showDatePicker} type={"date"} />
            <CustomDateTimePicker onDateChange={handleTimeChange} setshow={setShowTimePicker} show={showTimePicker} type={"time"} />
          </View>
          <View style={style.containerFlag}>
            <Text style={style.label}>Flag</Text>
            <View style={style.rowFlag}>
              {_renderFlags()}
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
  },
  rowFlag:{
    flexDirection: "row",
    gap: 10,
    marginTop: 10,

  }
});