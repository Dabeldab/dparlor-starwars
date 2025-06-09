import { useParams } from "react-router-dom";

const baseURL = 'https://www.swapi.tech/api'

//Fetch and return all People
export const fetchAllPeople = async (dispatch) => {
  try {
    const response = await fetch(`${baseURL}/people`)
    
    if (!response.ok) {
      throw new Error(response.status);
    }
    
    const data = await response.json();
    dispatch({
      type: 'fetchedAllPeople',
      payload: data.results  
    });
    console.log('data');
    return data.results;
  } 
  catch (error) {
    console.error("Error getting Star Wars People profiles", error);
  }
};
    

//Fetch Planets
export const fetchAllPlanets = async(dispatch) => {
try {
    const response = await fetch(`${baseURL}/planets`)
    
    if (!response.ok) {
        throw new Error(response.status);
    }

    const data = await response.json()
    console.log(data)
      dispatch({
        type: 'fetchedAllPlanets',
        payload: data.results
    });
        console.log('planets loaded')
        return data
}
catch (error) {
    console.error("Error getting Star Wars Planets", error)
}
}

//Fetch Vehicles
export const fetchAllVehicles = async(dispatch) => {
try {
    const response = await fetch(`${baseURL}/vehicles`)
    
    if (!response.ok) {
        throw new Error(response.status);
    }
    const data = await response.json()
    console.log(data.results)
      dispatch({
        type: 'fetchedAllVehicles',
        payload: data.results
    })
    return data.results
}
catch (error) {
    console.error("Error getting Star Wars vehicles", error)
}
}


//Fetch Movies
export const fetchAllFilms = async(dispatch) => {
try {
    const response = await fetch(`${baseURL}/films`)
    
    if (!response.ok) {
        throw new Error(response.status);
    }
    const movies = await response.json()
    console.log(movies.results)
      dispatch({
        type: 'fetchedAllFilms',
        payload: movies.results
    })
    return movies.results
}
catch (error) {
    console.error("Error getting Star Wars Films", error)
}
}
