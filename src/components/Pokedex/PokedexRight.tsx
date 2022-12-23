import React from "react";

import style from "../../../styles/pokedexRight.module.css";

interface Props {
  pokemonName: string;
  pokemonHeight: number;
  pokemonWeight: number;
}

const Right = ({ pokemonName, pokemonHeight, pokemonWeight }: Props) => {
  return (
    <>
      <div id={style.right}>
        <div id={style.stats}>
          <strong>Name:</strong> <span>{pokemonName}</span>
          <br />
          <strong>Height:</strong> <span>{pokemonHeight}</span>
          <br />
          <strong>Weight:</strong> <span>{pokemonWeight}</span>
          <br />
          <br />
        </div>
        <div id={style.blueButtons1}>
          <div className={style.blueButton}></div>
          <div className={style.blueButton}></div>
          <div className={style.blueButton}></div>
          <div className={style.blueButton}></div>
          <div className={style.blueButton}></div>
        </div>
        <div id={style.blueButtons2}>
          <div className={style.blueButton}></div>
          <div className={style.blueButton}></div>
          <div className={style.blueButton}></div>
          <div className={style.blueButton}></div>
          <div className={style.blueButton}></div>
        </div>
        <div id={style.miniButtonGlass4}></div>
        <div id={style.miniButtonGlass5}></div>
        <div id={style.barbutton3}></div>
        <div id={style.barbutton4}></div>
        <div id={style.yellowBox1}></div>
        <div id={style.yellowBox2}></div>
        <div id={style.bg_curve1_right}></div>
        <div id={style.bg_curve2_right}></div>
        <div id={style.curve1_right}></div>
        <div id={style.curve2_right}></div>
      </div>
    </>
  );
};

export default Right;
