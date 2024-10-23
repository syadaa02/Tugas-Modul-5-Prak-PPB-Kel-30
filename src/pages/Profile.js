import React from 'react';
import './Profile.css'; // Import file CSS

// Data profil pengguna
const profiles = [
  {
    name: "Asih001",
    githubLink: "https://github.com/Asih001",
    imgSrc: "https://avatars.githubusercontent.com/u/121451290?v=4",
    followers: 220
  },
  {
    name: "syadaa02",
    githubLink: "https://github.com/syadaa02/",
    imgSrc: "https://avatars.githubusercontent.com/u/128947917?v=4",
    followers: 245
  },
  {
    name: "mazrohaaniss",
    githubLink: "https://github.com/mazrohaaniss",
    imgSrc: "https://avatars.githubusercontent.com/u/128768898?v=4",
    followers: 276
  },
  {
    name: "Farrelino77",
    githubLink: "https://github.com/Farrelino77",
    imgSrc: "https://avatars.githubusercontent.com/u/120056274?v=4",
    followers: 299
  }
];

export default function Profile() {
  return (
    <div className="profile-container">
      <h1 className="profile-title">Profil Anggota</h1>
      <div className="profile-list">
        {profiles.map((profile, index) => (
          <div key={index} className="profile-card">
            <img 
              src={profile.imgSrc} 
              alt={profile.name} 
              className="profile-image" 
            />
            <h2 className="profile-name">{profile.name}</h2>
            <p className="profile-followers">{profile.followers} Followers</p>
            <a 
              href={profile.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="profile-link"
            >
              GitHub Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
