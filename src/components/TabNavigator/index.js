import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Pokedex } from '../../Screens';

const Tab = createBottomTabNavigator();

export function Tabs() {

  return (
   
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name) {
            iconName = focused
              ? 'md-heart-circle'
              : 'md-heart-circle-outline';
          }
          return <Ionicons name={iconName} size={40} color={route.name} />;
        },
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 65
        },
        tabBarLabel:() => {return null},
        headerStyle: {
          backgroundColor: '#235597',
        },
        headerTitle:()=> {return null},
        headerTitleStyle: {
          color:'#fff'
        }
      })}
      tabBarOptions={{
        activeTintColor: '#235597',
        inactiveTintColor: '#878787',
        "tabBarStyle": [
          {
            "display": "flex"
          },
          null
        ]
      }}
      >
        <Tab.Screen name="red" children={()=><Pokedex color={'red'}/>}/>
        <Tab.Screen name="green" children={()=><Pokedex color={'green'}/>}/>
        <Tab.Screen name="blue" children={()=><Pokedex color={'blue'}/>}/>
        <Tab.Screen name="black" children={()=><Pokedex color={'black'}/>} />
      </Tab.Navigator>
  );
}