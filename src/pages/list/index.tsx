import React, { useContext, useRef } from "react";

import { FlatList, Text, View, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { Input } from "../../components/input";
import { AntDesign, MaterialIcons} from "@expo/vector-icons";
import { Ball } from "../../components/Ball";
import { Flag } from "../../components/Flag";
import { themas } from "../../global/themes";
import { AuthContextList } from "../../context/authContext_list";
import { formatDateToBR } from "../../global/funcitions";
import { Swipeable } from "react-native-gesture-handler";
// Import or define the AuthContextType
import { AuthContextType, PropCard } from "../../global/Props";



export default function List() {

  const {taskList} = useContext<AuthContextType>(AuthContextList);
  const swipeableRefs = useRef<Array<Swipeable | null>>([]);

  const renderRightActions = () => {
    return(
    <View style={styles.button}>
      <AntDesign name="delete" size={20} color={"#FFF"} />
    </View>);
  };

  const renderLeftActions = () => {
    return(
      <View style={styles.buttonEdit}>
        <AntDesign name="edit" size={20} color={"#FFF"} />
      </View>
    );
  };

  const _renderCard = (item: PropCard, index: number) => {
    const color = item.flag == "Opcional" ? themas.colors.blueLigth : themas.colors.red;
    return (
      <Swipeable ref={(ref) => { swipeableRefs.current[index] = ref; }} key={index} renderRightActions={renderRightActions} renderLeftActions={renderLeftActions}>
        <TouchableOpacity style={styles.card}>
          <View style={styles.rowCard}>
            <View style={styles.rowCardLeft}>
              <Ball color={color} />
                <View>
                  <Text style={styles.titleCard}>{item.title}</Text>
                  <Text style={styles.descriptionCard}>{item.description}</Text>
                  <Text style={styles.descriptionCard}>até {formatDateToBR(item.timeLimite)}</Text>
              </View>
            </View>
            <Flag caption={item.flag} color={color} />
          </View>
        </TouchableOpacity>
      </Swipeable>  
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
            return (_renderCard(item  ,index ));
          }}
        />
      </View>
    </View>
  );
}