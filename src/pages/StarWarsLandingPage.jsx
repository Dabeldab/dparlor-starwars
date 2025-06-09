import react, {useState,useEffect} from "react"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { fetchAllFilms, fetchAllPeople,fetchAllPlanets,fetchAllVehicles } from "../lib/fetch"
import { CharacterCardList } from "../components/CharacterCardList"
import { PlanetCardList } from "../components/PlanetCardList"
import { VehicleCardList } from "../components/VehicleCardList"
import { FilmCardList } from "../components/FilmCardList"


export const StarWarsLandingPage = ()=> {
    const {store, dispatch} = useGlobalReducer();

const Favorites = ()=> {
  const favoriteCharacter = store.filter
  return Favorites
}
useEffect(() => {
    fetchAllPeople(dispatch)
    fetchAllPlanets(dispatch)
    fetchAllVehicles(dispatch)
    fetchAllFilms(dispatch)
}, [])



    return (
        <>
        <div className="container">
            <div className="">
            <div className="" >
                <div>
                    <h1 >Characters</h1>
                    
                    <CharacterCardList
                    allPeople={store.allPeople}
                    favorites={store.favorites}
                    dispatch={dispatch}
                    />
                    <br/>
                    <br/>

                    <h1>Planets</h1>
                    <br/>
                    <PlanetCardList
                    allPlanets={store.allPlanets}
                    favorites={store.favorites}
                    dispatch={dispatch}
                    />
                    <br/>
                    <br/>

                    <h1>Vehicles</h1>
                    <br/>

                    <VehicleCardList
                    allVehicles={store.allVehicles}
                    favorites={store.favorites}
                    dispatch={dispatch}
                    />
                    <br/>
                    <br/>

                    <h1></h1>
                    <br/>

                    <FilmCardList
                    allFilms={store.allFilms}
                    favorites={store.favorites}
                    dispatch={dispatch}
                    />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


