import React, { useContext } from "react";

import { FlatList, Text, View, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { Input } from "../../components/input";
import { MaterialIcons} from "@expo/vector-icons";
import { Ball } from "../../components/Ball";
import { Flag } from "../../components/Flag";
import { themas } from "../../global/themes";
import { AuthContextList } from "../../context/authContext_list";
// Import or define the AuthContextType
import { AuthContextType } from "../../global/Props";

type PropCard= {
  item:number,
  title:string,
  description:string,
  flag:"Urgente" | "Opcional",
}


export default function List() {

  const {taskList} = useContext<AuthContextType>(AuthContextList);

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
          data={taskList}
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