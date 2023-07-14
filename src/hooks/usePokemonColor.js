import { useEffect,useState } from "react";
const API_URL = "https://pokeapi.co/api/v2";

export function usePokemonColor (color){

    const [loading,setLoading] = useState(false)
    const [data, setData] = useState([])

    async function fetchPokemons () {
        setLoading(true)
        try {

          let response;
          await new Promise((resolve) => setTimeout(resolve, 2000));
    
          if (color === undefined) {
            response = await fetch(`${API_URL}/pokemon`);
          } else {
            response = await fetch(`${API_URL}/pokemon-color/${color}`);
        }
        console.log(`${API_URL}/pokemon-color/${color}`)
    
          const json = await response.json();

          const res = color !== undefined ? json["pokemon_species"] : json["results"];
          
          setData(res)
          setLoading(false)

        } catch (error) {

          setLoading(false)
          console.log("catch", error);
          return [];

        }
    };

    useEffect(()=>{
        fetchPokemons()
    },[])

    return [loading,data]

}