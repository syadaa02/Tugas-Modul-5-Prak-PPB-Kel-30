import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams untuk ambil parameter dari URL

export default function MovieDetail() {
  const { id } = useParams(); // Mengambil id dari URL
  
  // Data dummy untuk film. Data ini bisa didapatkan dari API di masa mendatang.
  const movies = [
    {
      id: '1',
      title: 'John Wick',
      description: 'John Wick is a legendary hitman who seeks vengeance.',
      img: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9.RI_TTW.jpg',
      cast: ['Keanu Reeves', 'Ian McShane'],
      director: 'Chad Stahelski',
      duration: '101 minutes',
      releaseDate: 'October 24, 2014',
      genre: 'Action, Crime',
    },
    {
      id: '2',
      title: 'Oppenheimer',
      description: 'A story of the scientist who developed the atomic bomb.',
      img: 'https://m.media-amazon.com/images/I/71lqDylcvGL.jpg',
      cast: ['Cillian Murphy', 'Emily Blunt'],
      director: 'Christopher Nolan',
      duration: '180 minutes',
      releaseDate: 'July 21, 2023',
      genre: 'Biography, Drama, History',
    },
    // Tambahkan data film lainnya jika diperlukan
  ];

  // Cari film berdasarkan id
  const movie = movies.find(movie => movie.id === id);

  // Jika film tidak ditemukan
  if (!movie) {
    return (
      <div style={{ color: 'white', textAlign: 'center', padding: '50px' }}>
        <h1>Movie not found</h1>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', color: 'white', textAlign: 'center' }}>
      <h1>{movie.title}</h1>
      <img 
        src={movie.img} 
        alt={movie.title} 
        style={{ 
          width: '300px', 
          height: 'auto', 
          borderRadius: '10px', 
          marginBottom: '20px' 
        }} 
      />
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Duration:</strong> {movie.duration}</p>
      <p><strong>Release Date:</strong> {movie.releaseDate}</p>
      <p><strong>Director:</strong> {movie.director}</p>
      <p><strong>Cast:</strong> {movie.cast.join(', ')}</p>
      <p style={{ marginTop: '20px' }}>{movie.description}</p>
    </div>
  );
}
