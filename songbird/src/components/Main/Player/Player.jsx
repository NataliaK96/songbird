import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import 'react-h5-audio-player/src/styles.scss';
import './Player.scss';

export const Player = (props) => (
  <AudioPlayer
    autoPlayAfterSrcChange={false}
    src={props.src}
    ref={props.myRef}
  />
);
