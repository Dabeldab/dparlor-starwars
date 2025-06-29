import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer';

export const ProfilePage = () => {
  const { uid } = useParams();
  const [character, setCharacter] = useState(null);
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    const fetchData = async () => {
      try {

        
        // Fetch character data from SWAPI.tech
        const response = await fetch(`https://www.swapi.tech/api/people/${uid}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setCharacter(data.result.properties);
        
      } 
      catch (error) {
        console.error("Error getting Star Wars People profiles", error);
  }
    };

    fetchData();
  }, [uid]);


  if (!character) return <div className="alert alert-warning mt-3">No character data found</div>;

  return (
    <div className="container py-4">
      {/* Character Card */}
      <div className="card mb-4">
        <img className="character-card-img" style={{width: "200px", height: "300px"}} src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${uid}.jpg`} ></img>
        <div className="card-body">
          <h1 className="card-title">{character.name}</h1>
          
          <div className="card-subtitle mb-3 text-muted">
            Born: {character.birth_year || 'unknown'} | Gender: {character.gender || 'unknown'}
          </div>
          
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Height:</strong> {character.height || 'unknown'} cm
            </li>
            <li className="list-group-item">
              <strong>Mass:</strong> {character.mass || 'unknown'} kg
            </li>
            <li className="list-group-item">
              <strong>Hair Color:</strong> {character.hair_color || 'unknown'}
            </li>
            <li className="list-group-item">
              <strong>Eye Color:</strong> {character.eye_color || 'unknown'}
            </li>

          </ul>
        </div>
      </div>

      <div className="mt-4">
        <Link to="/" className="btn btn-outline-secondary">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};