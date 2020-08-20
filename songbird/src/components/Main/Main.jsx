import React from 'react';
import style from './Main.module.scss';
import { BirdCard } from './BirdCard/BirdCard';
import { ChoiceBird } from './ChoiceBird/ChoiceBird';

export const Main = (props) => (
  <main className={style.main}>
    <BirdCard />
    <ChoiceBird />
  </main>
);
