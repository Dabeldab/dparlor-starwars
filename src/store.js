import React, {useState,useEffect} from "react";

export const initialStore=()=>{
  return{
      allPeople: [],
      allPlanets: [],
      allVehicles: [],
      singlePerson: [],
      singlePlanets: [],
      singleVehicles: [],
      singleStarships: [],
      favorites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    //case 'add_task':

      //const { id,  color } = action.payload

      //return {
        //...store,
       // todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      //};
      case 'favoritePerson':
        const favoriteArray = action.payload
        return {
          ...store, 
          favorites: [...store, ...favoriteArray]
        }
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
      case 'fetchedAllPlanets':
        break;
    default:
return store;  }    
}
