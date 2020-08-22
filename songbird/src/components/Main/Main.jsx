import React from 'react';
import style from './Main.module.scss';
import { BirdCard } from './BirdCard/BirdCard';
import { ChoiceBird } from './ChoiceBird/ChoiceBird';
import { FluentRevealEffect } from 'fluent-reveal-effect';

FluentRevealEffect.applyEffect('.btn', {
  lightColor: 'rgba(255,255,255,0.1)',
  gradientSize: 150,
});

export const Main = (props) => (
  <main className={style.main}>
    <BirdCard />
    <div className={style.row}>
      <ChoiceBird />
      <BirdCard
        translate="латинское название"
        about="Это очень красивый птица!!"
      />
    </div>
    <button className="btn">Next level</button>
  </main>
);
