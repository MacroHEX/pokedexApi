import React, { useState, useEffect } from "react";
import axios from "axios";
import {IPokemon} from "../../types/IPokemon";

const useGetApi = (value: number) => {
  const [pokemon, setPokemon] = useState({
    name: "",
    height: 0,
    weight: 0,
    image: "",
  });

  useEffect(() => {
    axios.get<IPokemon>(`https://pokeapi.co/api/v2/pokemon/${value}`).then((response) => {
      setPokemon({
        name: response.data.name,
        height: response.data.height,
        weight: response.data.weight,
        image: response.data.sprites.other["official-artwork"].front_default,
      });
    });
  }, [value]);
  return pokemon;
};

export default useGetApi;
