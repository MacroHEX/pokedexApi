import React, {useState, useEffect} from "react";

import Left from "../Pokedex/PokedexLeft";
import Right from "../Pokedex/PokedexRight";
import style from "../../../styles/pokedex.module.css";

import useGetApi from "../../hooks/useGetApi";

const Pokedex = () => {

  const [value, setValue] = useState(1);

  const pokemon = useGetApi(value);

  return (
    <>
      <div id={style.pokedex}>
        <Left />
        <Right />
      </div>
    </>
  );
};

export default Pokedex;
