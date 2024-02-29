import React from "react";
import {Text, View} from 'react-native';
import Janela from "./components/Janela";
import Segundo from "./components/Segundo";
import Terceiro from "./components/Terceiro";

export default ()=>{
  return (
    <View>
                <Janela/>
        <Segundo/>
        <Terceiro/>
        <Text>Testando App</Text>
    </View>
  )

}