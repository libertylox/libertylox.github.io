import React from 'react';

const ProfileCard = ({ config }) => {
  return (
    <div className="profile-card">
      <img 
        src={config.avatar} 
        alt="Profile Avatar" 
        className="profile-avatar"
      />
      <h1 className="profile-name">{config.name}</h1>
      <p className="profile-bio">{config.bio}</p>
      <div className="profile-links">
        {config.links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-link"
          >
            <span className="link-label">{link.label}</span>
            <span className="link-value">{link.value}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;