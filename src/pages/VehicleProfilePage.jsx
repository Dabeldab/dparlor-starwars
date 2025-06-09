import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer';

export const VehicleProfilePage = () => {
  const { uid } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    const fetchData = async () => {
      try {

        
        const response = await fetch(`https://www.swapi.tech/api/vehicles/${uid}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setVehicle(data.result.properties);
        
      } 
      catch (error) {
        console.error("Error getting Star Wars Vehicle Details", error);
  }
    };

    fetchData();
  }, [uid]);


  if (!vehicle) return <div className="alert alert-warning mt-3">No Vehicle data found</div>;

  return (
            <>
                <div className="container py-4">
                {/* Vehicle Card */}
                <div className="card mb-4">
                    <img className="vehicle-card-img" style={{width: "300px", height: "300px"}} src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/vehicles/${uid}.jpg`} ></img>
                    <div className="card-body">
                    <h1 className="card-title">{vehicle.name}</h1>
                    
                    <div className="card-subtitle mb-3 text-muted">
                        Model: {vehicle.model} | Manufacturer: {vehicle.manufacturer}
                    </div>
                    
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                        <strong>Cost:</strong> {vehicle.cost_in_credits}
                        </li>
                        <li className="list-group-item">
                        <strong>Crew:</strong> {vehicle.crew}
                        </li>
                        <li className="list-group-item">
                        <strong>Top Speed:</strong> {vehicle.max_atmosphering_speed}
                        </li>
                        <li className="list-group-item">
                        <strong>Passengers:</strong> {vehicle.passengers}
                        </li>
                        <li className="list-group-item">
                        <strong>Length:</strong> {vehicle.length}
                        </li>
                        <li className="list-group-item">
                        <strong>Cargo Capacity:</strong> {vehicle.cargo_capacity}
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
    </>
                );
            };
