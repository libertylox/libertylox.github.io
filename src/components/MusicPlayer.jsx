import React from 'react';
import MusicVisualizer from './MusicVisualizer';

const MusicPlayer = ({ config }) => {
  return (
    <div className="music-player">
      <div className="music-info">
        <div className="music-title">{config.title}</div>
        <div className="music-artist">{config.artist}</div>
      </div>
      <MusicVisualizer />
    </div>
  );
};

export default MusicPlayer;