import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import 'react-h5-audio-player/src/styles.scss';
import './Player.scss';

export const Player = () => (
  <AudioPlayer
    autoPlay
    //src='http://example.com/audio.mp3'
    src='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
    onPlay={(e) => console.log('onPlay')}
    // other props here
  />
);
