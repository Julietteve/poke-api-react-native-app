import * as React from 'react';
import { Image } from 'react-native';
import { Text, View, StyleSheet } from 'react-native';

export function ItemCard(props) {

  const {name,frontImage,types,color,backImage} = props

  return (
    <View>
      <Text style={[style.title,{color:color}]}>{name}</Text>
      <View style={style.imageContainer}>
        <Image style={style.image} source={{uri:frontImage}}></Image>
        <Image style={style.image} source={{uri:backImage}}></Image>
      </View>
      <View>
        <View style={style.typesContainer}>
          {
            types ? types.map((item)=>(
              <Text style={style.typesText} key={item}>{item}</Text>
            ))
            :null
          }
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  image:{
    width:200,
    height: 200,
    backgroundColor:'#eaeaea',
    borderRadius:15,
    marginRight: 10
  },
  title:{
    fontSize:30,
    textTransform:'uppercase',
    paddingVertical:30,
    textAlign:'center'
  },
  imageContainer:{
    flexDirection:'row',
    justifyContent:'center'
  },
  typesContainer:{
    flexDirection:'row',
    justifyContent:"center",
    paddingVertical:30,
  },
  typesText:{
    color:'#fff',
    backgroundColor:'#235597',
    padding:20,
    borderRadius:15,
    marginHorizontal:5
  }
})
