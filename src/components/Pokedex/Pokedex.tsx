import React, { useState, useEffect } from "react";

import Left from "../Pokedex/PokedexLeft";
import Right from "../Pokedex/PokedexRight";
import style from "../../../styles/pokedex.module.css";

import useGetApi from "../../hooks/useGetApi";

const Pokedex = () => {
  const [value, setValue] = useState(1);

  const pokemon = useGetApi(value);

  const handleValue = (number: number) => {
    if(value+number === 0) return;
    setValue(value + number);
  };

  return (
    <>
      <div id={style.pokedex}>
        <Left pokemonImg={pokemon.image} handleValue={ handleValue }/>
        <Right
          pokemonName={pokemon.name}
          pokemonHeight={pokemon.height}
          pokemonWeight={pokemon.weight}
        />
      </div>
    </>
  );
};

export default Pokedex;
