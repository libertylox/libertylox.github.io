import React from 'react';

const IntroScreen = ({ showIntro, onEnterProfile }) => {
  return (
    <div 
      className={`intro-container ${showIntro ? 'visible' : 'hidden'}`}
      onClick={onEnterProfile}
    >
      <div className="intro-content">
        <div className="intro-text">click to view</div>
        <div className="intro-subtitle">griddy...</div>
      </div>
    </div>
  );
};

export default IntroScreen;