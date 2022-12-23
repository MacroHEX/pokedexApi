import React from "react";

import style from "../../../styles/pokedexRight.module.css";

const Right = () => {
  return (
    <>
      <div id={style.right}>
        <div id={style.stats}>
          <strong>Name:</strong> Psyduck
          <br />
          <strong>Type:</strong> Water
          <br />
          <strong>Height:</strong> 2'072''
          <br />
          <strong>Weight:</strong> 43.2 lbs.
          <br />
          <br />
          <strong>The duck Pokemon</strong>
          <br />
          Uses mysterious powers to perform various attacks.
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
