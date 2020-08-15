import React from 'react';
import { Header, Main } from './components';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.app}>
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;
