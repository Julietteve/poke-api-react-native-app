import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ItemCard } from '../../components';
import { usePokemonName } from '../../hooks/usePokemonName';
import { useRoute } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';

export function Items() {

  const route = useRoute();
  const [loading,data] = usePokemonName(route.params.name)

  return (
    <View style={style.container}>
     {
        loading ? <ActivityIndicator color={'blue'} size={'small'}></ActivityIndicator>
        :
        <ItemCard
          color={route.params.color}
          name={data.name}
          frontImage={data.frontImage}
          backImage={data.backImage}
          types={data.types}
        />
      }
    </View>
  );
}

const style = StyleSheet.create({
  container :{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center' ,
    backgroundColor:"#ffff"
  }
})
