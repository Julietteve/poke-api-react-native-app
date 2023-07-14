import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';

export function Pockecard(props) {

  const {color, name} = props

  return (
    <View style={style.container}>
      <Ionicons style={style.pokeIcon} name={'md-heart-circle'} size={40} color={color} />
      <Text style={style.pokeName}>{name}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container :{
    marginVertical:20,
    flexDirection:'row',
    alignItems:'center',
    width:'100%'
  },
  pokeName:{
    color:'#235597',
    fontSize:20
  },
  pokeIcon:{
    marginRight:30,
    fontWeight:'bold'
  }
})
