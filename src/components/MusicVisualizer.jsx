import React from 'react';

const MusicVisualizer = () => {
  return (
    <div className="music-visualizer">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="music-bar"
          style={{ animationDelay: `${i * 0.1}s` }}
        />
      ))}
    </div>
  );
};

export default MusicVisualizer;