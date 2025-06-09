import React, {useState,useEffect} from "react";

export const initialStore ={
      allPeople: [],
      allPlanets: [],
      allVehicles: [],
      allFilms: [],
      favorites: []
}

export default function storeReducer(store, action = {}) {
   
  switch(action.type){
    
      case 'bookmark':
          const {uid, name,type} = action.payload
            const starId = `${type}_${uid}`;

              console.log(`Added ${name} with id of ${uid} ${starId}`)

          const exists = store.favorites.some(fav => fav.starId === starId);
          if (exists) return store;

        const filteredArray = store.favorites.filter(favorite => favorite.starId !== starId)
        return {
          ...store, 
          favorites: [...store.favorites.filter(fav => fav.starId !== starId),
          { starId, uid, name }]
        }
      
      case 'removeBookmark':
        return {
          ...store,
          favorites: store.favorites.filter(fav => fav.starId !== action.payload.starId)
        };

      case 'fetchedAllPeople':
        const peopleArray = action.payload;
        return {
          ...store,
          allPeople: [...peopleArray]
        }
      case 'fetchOnePerson':
        const singlePersonArray = action.payload;
        return {
          ...store,
          singlePerson: singlePersonArray
        }
        
      case 'fetchedAllVehicles':
        const vehiclesArray = action.payload;
        return {
          ...store,
          allVehicles: vehiclesArray
        }

      case 'fetchedAllPlanets':
        const planetArray = action.payload;
        return {
          ...store,
          allPlanets: [...planetArray]
        }

case 'fetchedAllFilms':
  return {
    ...store,
    allFilms: action.payload,
    filmsLoading: false
  };

case 'fetchFilmsError':
  return {
    ...store,
    filmsError: action.payload,
    filmsLoading: false
  };

    default:
      console.warn(`Unkown action: ${action.type}`)
      return store  
}    
}
