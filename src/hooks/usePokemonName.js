import { useEffect,useState } from "react";
const API_URL = "https://pokeapi.co/api/v2/pokemon/";

export function usePokemonName (name){

    const [loading,setLoading] = useState(false)
    const [data, setData] = useState({})

    async function fetchPokemons (){
      setLoading(true)
  
      try {
        const response = await fetch(API_URL + name);

        const pokemon = await response.json();
        const types = pokemon.types.map((typeObj) => typeObj.type.name);
  
        const res = {
          name: pokemon.name,
          frontImage: pokemon.sprites.front_default,
          backImage: pokemon.sprites.back_default,
          types
        };
        setData(res)
        setLoading(false)

      } catch (error) {
        setLoading(false)
        console.log("Error", error);
        return null;
      }
    };

    useEffect(()=>{
        fetchPokemons()
    },[])

    return [loading,data]

}