import React from 'react';

const Particles = () => {
  const particles = Array.from({ length: 30 }, (_, i) => (
    <div
      key={i}
      className="particle"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 10}s`,
        animationDuration: `${Math.random() * 5 + 5}s`
      }}
    />
  ));

  return <div className="particles">{particles}</div>;
};

export default Particles;