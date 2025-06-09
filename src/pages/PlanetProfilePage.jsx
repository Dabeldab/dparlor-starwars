import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer';

export const PlanetProfilePage = () => {
  const { uid } = useParams();
  const [planet, setPlanet] = useState(null);
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    const fetchData = async () => {
      try {

        
        // Fetch planet data from SWAPI.tech
        const response = await fetch(`https://www.swapi.tech/api/planets/${uid}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setPlanet(data.result.properties);
        
      } 
      catch (error) {
        console.error("Error getting Star Wars Planet details", error);
  }
    };

    fetchData();
  }, [uid]);


  if (!planet) return <div className="alert alert-warning mt-3">No planet data found</div>;

  return (
    <div className="container py-4">
      {/* planet Card */}
      <div className="card mb-4">
        <img className="planet-card-img" style={{width: "300px", height: "300px"}} src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/planets/${uid}.jpg`} ></img>
        <div className="card-body">
          <h1 className="card-title">{planet.name}</h1>
          
          <div className="card-subtitle mb-3 text-muted">
            Climate: {planet.climate} | diameter: {planet.diameter}
          </div>
          
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Population:</strong> {planet.population}
            </li>
            <li className="list-group-item">
              <strong>Terrain:</strong> {planet.terrain}
            </li>
            <li className="list-group-item">
              <strong>Orbital Period:</strong> {planet.orbital_period}
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