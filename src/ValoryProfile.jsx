import React, { useState, useEffect, useRef } from 'react';
import Particles from './components/Particles';
import MusicPlayer from './components/MusicPlayer';
import StatusIndicator from './components/StatusIndicator';
import ProfileCard from './components/ProfileCard';
import IntroScreen from './components/IntroScreen';
import { defaultConfig } from './config/config';
import './valory.css';

const ValoryProfile = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [config, setConfig] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    setConfig(defaultConfig);
    
    // Disable right-click and certain keyboard shortcuts
    const handleContextMenu = (e) => e.preventDefault();
    const handleKeyDown = (e) => {
      if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I") || (e.ctrlKey && e.key === "S")) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("selectstart", () => false);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleEnterProfile = () => {
    setShowIntro(false);
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log('Audio blocked'));
    }
  };

  if (!config) return null;

  return (
    <div className="valory-profile">
      <Particles />
      
      <IntroScreen 
        showIntro={showIntro}
        onEnterProfile={handleEnterProfile}
      />

      <div className={`main-container ${showIntro ? 'hidden' : 'visible'}`}>
        <ProfileCard config={config} />
      </div>

      <StatusIndicator />
      
      <MusicPlayer config={config.music} />

      <audio 
        ref={audioRef} 
        loop 
        volume={0.3}
        src={config.music.file}
      />

      <div style={{ display: 'none' }}>© skids.wiki - dont skid our website kids</div>
    </div>
  );
};

export default ValoryProfile;