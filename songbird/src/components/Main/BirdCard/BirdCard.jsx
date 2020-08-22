import React from 'react';
import style from './BirdCard.module.scss';
import { Player } from '../Player/Player';

export const BirdCard = (props) => {
  return (
    <div className={style.card}>
      <img className={style.img} src="./img/silhouette_bird.jpg" alt="image" />
      <p className={style['name-bird']}>******** Ястреб</p>
      {props.translate ? (
        <p className={style.translate}>{props.translate}</p>
      ) : undefined}
      <Player />
      {props.about ? <p className={style.about}>{props.about}</p> : undefined}
    </div>
  );
};
