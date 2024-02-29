import React from "react";
import {Text, View} from 'react-native';
import estilo from './estilo'

export default () => {
    return (
        <View style ={[estilo.fundo,estilo.fonte]}>
            <Text>Teste 1</Text>
            <Text>Teste 2</Text>
            <Text>Teste 3</Text>
        </View>
    )
}