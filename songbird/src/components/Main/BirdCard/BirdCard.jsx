import React, { useContext } from 'react';
import style from './BirdCard.module.scss';
import img from '../../../assets/img/silhouette_bird.jpg';
import { AppContext } from '../../../assets/context';
import {Player} from '../../'

export const BirdCard = (props) => {
  const context = useContext(AppContext);
  if (!props.bird) {
    return (
      <div className={style.card}>
        Послушайте плеер. Выберите птицу из списка
      </div>
    );
  }
  if (props.view) {
    return (
      <div className={style.card}>
        <div className={style.row}>
          <img className={style.img} src={props.bird.image} alt='bird' />
          <div className={style.container}>
            <h4 className={style.title}>{props.bird.name}</h4>
            <div className={style.translate}>{props.bird.translate}</div>
            <Player
              src={props.bird.sound}
             
            />
          </div>
        </div>
        <div className={style.row}>
          <div className={style.about}>{props.bird.about}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={style.card}>
      <div className={style.row}>
        <img
          className={style.img}
          src={props.answerIsCorrect ? props.bird.image : img}
          alt='bird'
        />
        <div className={style.container}>
          <h4 className={style.title}>
            {props.answerIsCorrect ? props.bird.name : '******'}
          </h4>
          <Player
            myRef={context.soundRef}
            src={props.bird.sound}
            
          />
        </div>
      </div>
    </div>
  );
};
