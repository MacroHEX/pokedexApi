import React from "react";
import Image from "next/image";

import style from "../../../styles/screen.module.css";

interface Props {
  pokemonImg: string;
}

const Screen = ({ pokemonImg }: Props) => {
  return (
    <>
      <div id={style.screen}>
        <div id={style.topPicture}>
          <div id={style.buttontopPicture1}></div>
          <div id={style.buttontopPicture2}></div>
        </div>
        <div id={style.picture}>
          {pokemonImg && (
            <Image src={pokemonImg} alt="psykokwak" width={170} height={170} />
          )}
        </div>
        <div id={style.buttonbottomPicture}></div>
        <div id={style.speakers}>
          <div className={style.sp}></div>
          <div className={style.sp}></div>
          <div className={style.sp}></div>
          <div className={style.sp}></div>
        </div>
      </div>
    </>
  );
};

export default Screen;
