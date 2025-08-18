import React from "react";

import { FlatList, Text, View, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { Input } from "../../components/input";
import { MaterialIcons} from "@expo/vector-icons";
import { Ball } from "../../components/Ball";
import { Flag } from "../../components/Flag";
import { themas } from "../../global/themes";

type PropCard= {
  item:number,
  title:string,
  description:string,
  flag:"Urgente" | "Importante" | "Normal"
}
const data:Array<PropCard> = [
  {
    item:0,
    title:"Realizar a licao de casa!!",
    description:"Pagina 10 a 20",
    flag:"Urgente"
  },
  {
    item:1,
    title:"Passear com cachorro",
    description:"Levar a tica passear",
    flag:"Importante"
  },
  {
    item:2,
    title:"Almoco",
    description:"Fazer o almoco e comer",
    flag:"Urgente"
  },
];


export default function List() {

  const _renderCard = (item: PropCard) => {
    return (
      <TouchableOpacity style={styles.card}>
        <View style={styles.rowCard}>
          <View style={styles.rowCardLeft}>
             <Ball color="red" />
             <View>
              <Text style={styles.titleCard}>{item.title}</Text>
              <Text style={styles.descriptionCard}>{item.description}</Text>
             </View>
          </View>
          <Flag caption="Urgente" color={themas.colors.red}/> 
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}> 
      <View style={styles.header }>
        <Text style={styles.greeting}>Bom, dia <Text style={{fontWeight: "bold"}}>Jose</Text></Text>
        <View style={styles.boxInput}>
          <Input 
            IconLeft={MaterialIcons} iconLeftName="search"
          />
        </View>
      </View>
      <View style={styles.boxList}>
        <FlatList 
          data={data}
          style={{marginTop: 40, paddingHorizontal:30}}
          keyExtractor={(item, index) => item.item.toString()}
          renderItem={({item,index}) => {
            return (_renderCard(item));
          }}
        />
      </View>
    </View>
  );
}