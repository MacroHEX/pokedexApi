import React from "react";

import Screen from "../Pokedex/Screen";

import style from "../../../styles/pokedexLeft.module.css";

const Left = () => {
  return (
    <>
      <div id={style.left}>
        <div id={style.logo}></div>
        <div id={style.bg_curve1_left}></div>
        <div id={style.bg_curve2_left}></div>
        <div id={style.curve1_left}>
          <div id={style.buttonGlass}>
            <div id={style.reflect}> </div>
          </div>
          <div id={style.miniButtonGlass1}></div>
          <div id={style.miniButtonGlass2}></div>
          <div id={style.miniButtonGlass3}></div>
        </div>
        <div id={style.curve2_left}>
          <div id={style.junction}>
            <div id={style.junction1}></div>
            <div id={style.junction2}></div>
          </div>
        </div>
        <Screen />
        <div id={style.bigbluebutton}></div>
        <div id={style.barbutton1}></div>
        <div id={style.barbutton2}></div>
        <div id={style.cross}>
          <div id={style.leftcross}>
            <div id={style.leftT}></div>
          </div>
          <div id={style.topcross}>
            <div id={style.upT}></div>
          </div>
          <div id={style.rightcross}>
            <div id={style.rightT}></div>
          </div>
          <div id={style.midcross}>
            <div id={style.midCircle}></div>
          </div>
          <div id={style.botcross}>
            <div id={style.downT}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Left;
