import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function SavedList(props) {
  const navigate = useNavigate()
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movieId => (
        <span key={movieId} className="saved-movie">
          <Link to={`/movies/${movieId}`}>{movieId}</Link>
          </span>
        
      ))}
      <div onClick={() => navigate("/")} className="home-button">Home</div>
    </div>
  );
}
