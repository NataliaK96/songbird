import React from 'react';
import logo from '../../assets/img/logoBird.png';
import logoName from '../../assets/img/logoName.png';
import style from './Header.module.scss';
import { Score } from '../';
import { Level } from './Level/Level';

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={`${style.row} ${style.spaceBetween}`}>
        <div>
          <img className={style.logo} src={logo} alt='logo' />
          <img className={style['logo-name']} src={logoName} alt='logo' />
        </div>
        <Score className={style.score} score={0} />
      </div>
      <div>
        <Level activeLvl='warmUp' />
      </div>
    </header>
  );
};
