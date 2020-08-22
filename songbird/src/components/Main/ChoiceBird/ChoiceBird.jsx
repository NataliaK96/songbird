import React from 'react';
import style from './ChoiceBird.module.scss';
import { birds } from '../../../assets/birds';

export const ChoiceBird = () => (
  <ul className={style.choice}>
    {birds.warmUp.map((item) => (
      <li>{item.name}</li>
    ))}
  </ul>
);
