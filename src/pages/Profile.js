import React from 'react';

// Data profil pengguna dengan tambahan jumlah followers
const profiles = [
  {
    name: "Asih001",
    githubLink: "https://github.com/Asih001",
    imgSrc: "https://avatars.githubusercontent.com/u/121451290?v=4", // Ganti dengan URL foto profil
    followers: 220 // Jumlah followers
  },
  {
    name: "syadaa02",
    githubLink: "https://github.com/syadaa02/",
    imgSrc: "https://avatars.githubusercontent.com/u/128947917?v=4", // Ganti dengan URL foto profil
    followers: 245 // Jumlah followers
  },
  {
    name: "mazrohaaniss",
    githubLink: "https://github.com/mazrohaaniss",
    imgSrc: "https://avatars.githubusercontent.com/u/128768898?v=4", // Ganti dengan URL foto profil
    followers: 276 // Jumlah followers
  },
  {
    name: "Farrelino77",
    githubLink: "https://github.com/Farrelino77",
    imgSrc: "https://avatars.githubusercontent.com/u/120056274?v=4", // Ganti dengan URL foto profil
    followers: 299 // Jumlah followers
  }
];

export default function ProfileList() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      padding: '50px', 
      backgroundColor: '#282c34', // Latar belakang gelap
      color: 'white', // Teks menjadi putih
      minHeight: '100vh', // Minimal tinggi viewport agar tidak tertutupi
      paddingBottom: '100px' // Tambahkan padding bawah untuk profil terakhir
    }}>
      <h1 style={{ color: 'white' }}>Profil Pengguna</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {profiles.map((profile, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <img 
              src={profile.imgSrc} 
              alt={profile.name} 
              style={{ width: '100px', height: '100px', borderRadius: '50%' }} 
            />
            <h2 style={{ color: 'white' }}>{profile.name}</h2> {/* Nama pengguna dengan warna putih */}
            <p style={{ color: 'white' }}>{profile.followers} Followers</p> {/* Menampilkan jumlah followers dengan warna putih */}
            <a 
              href={profile.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#61dafb', textDecoration: 'underline', cursor: 'pointer' }} // Warna biru muda khas React
            >
              Link to GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
