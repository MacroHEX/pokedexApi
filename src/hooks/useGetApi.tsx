import React, { useState, useEffect } from "react";
import axios from "axios";

const useGetApi = (value: number) => {
  const [pokemon, setPokemon] = useState({
    name: "",
    height: "",
    weight: "",
    image: "",
  });

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`).then((response) => {
      setPokemon({
        name: response.data.name,
        height: response.data.height,
        weight: response.data.weight,
        image: response.data.sprites.other.home.front_default,
      });
    });
  }, [value]);
  return pokemon;
};

export default useGetApi;
