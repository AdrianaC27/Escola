import React from "react";
import {StyleSheet, Text,View} from 'react-native';

export default ()=>{
    return (
        <View>
            <Text style={[terceiroEstilo.fGrande, terceiroEstilo.bFundo]}>Terceiro 1</Text>
            <Text>Terceiro 2</Text>
            <Text style={terceiroEstilo.bFundo }>Terceiro 3</Text>
        </View>
    )
}

const terceiroEstilo = StyleSheet.create(
    {
        bFundo:{
            backgroundColor: '#ACDB',
            width: 200,
            height: 100,
        },
        fGrande:{
            fontSize: 30,
        }
    }
)