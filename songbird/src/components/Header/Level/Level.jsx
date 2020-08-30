import React from 'react';
import style from './Level.module.scss';
import {AppContext} from '../../../assets/context'
import { useContext } from 'react';

export const Level = (props) => {
  const context = useContext(AppContext)
  return(
  <ul className={style.level}>
    {context.levels.map((item) => (
      <li
        key={item.id}
        className={context.level.id === item.id ? style.active : ''}
      >
        {item.name}
      </li>
    ))}
  </ul>
);}
