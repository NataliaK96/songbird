import React, {useContext} from "react";
import style from "./Score.module.scss";
import {AppContext} from '../../assets/context'

export const Score = (props) => {
const constext = useContext(AppContext)
  return(
  <span className={style.score}>Score: {constext.score}</span>
);
}
