import React from 'react';
import logo from '../../assets/img/logoBird.png';
import logoName from '../../assets/img/logoName.png';
import style from './Header.module.scss';
import { Score } from '../';

export const Header = () => {
  return (
    <header className={style.header}>
      <img className={style.logo} src={logo} alt="logo" />
      <img className={style['logo-name']} src={logoName} alt="logo" />
    </header>
  );
};
