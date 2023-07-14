import * as React from 'react';
import { Text, View , StyleSheet, ActivityIndicator, FlatList,Image} from 'react-native';
import { Pockecard } from '../../components';
import { usePokemonColor } from '../../hooks/usePokemonColor';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function Pokedex(props) {

  const {color} = props
  const [loading,data] = usePokemonColor(color)
  const navigation = useNavigation();

  function renderItem ({ item, index }) {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Details',{name:item.name, color:color})}>
        <Pockecard
          color={color}
          name={item.name}
        />
      </TouchableOpacity>
    )
}

  return (
    <View style={style.container}>
      <View style={style.containerTitle}>
        <Image 
       style={{width:400,height:200, resizeMode: 'contain',}}
        source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png'}}></Image>
      {/* <Text style={style.title} >{color} pokemons</Text> */}
      {
        loading ? <ActivityIndicator color={color} size={'small'}/>
        :
        <FlatList
          renderItem={renderItem}
          data={data}
          keyExtractor={(item, index) => index}
          style={style.flatList}
        />
      
      }
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:"#ffff"
  },
  containerTitle:{
    marginVertical:20,
    justifyContent:'center',
    alignItems:'center'
  },
  title:{
    color:'#235597',
    fontSize:32,
    textTransform:'capitalize',
    padding:20,
    borderRadius:15,
    marginHorizontal:5
    
  },
  flatList:{
    width:'80%', 
    marginHorizontal:100
  }
})