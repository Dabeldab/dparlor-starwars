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
    console.log(data);
    return data.results;
  } 
  catch (error) {
    console.error("Error getting Star Wars People profiles", error);
  }
};
    
//Fetch and return a single person called
export const fetchOnePerson = async (dispatch) => {
    const personId = 1;

  try {
    const response = await fetch(`${baseURL}/people/${personId}`)
    
    if (!response.ok) {
      throw new Error(response.status);
    }
    
    const data = await response.json();
    dispatch({
      type: 'fetchOnePerson',
      payload: data.results  
    });
    console.log(data);
    return data.results;
  } 
  catch (error) {
    console.error("Error getting Star Wars People profiles", error);
  }
};

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
    return data
}
catch (error) {
    console.error("Error getting Star Wars People planets", error)
}
}


export const fetchAllVehicles = async(dispatch) => {
try {
    const response = await fetch(`${baseURL}/vehicles`)
    
    if (!response.ok) {
        throw new Error(response.status);
    }
    const data = await response.json()
    console.log(data.results)
      dispatch({
        type: 'fetchedVehicles',
        payload: data.results
    })
    return data.results
}
catch (error) {
    console.error("Error getting Star Wars People vehicles", error)
}

}