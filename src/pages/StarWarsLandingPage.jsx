import react, {useState,useEffect} from "react"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { fetchAllPeople,fetchAllPlanets,fetchAllVehicles,fetchOnePerson } from "../lib/fetch"
import { CharacterCardList } from "../components/CharacterCardList"

export const StarWarsLandingPage = ()=> {
    const {store, dispatch} = useGlobalReducer();

const Favorites = ()=> {
  const favoriteCharacter = store.filter((favorite) => (store.favorites))
}
useEffect(() => {
    fetchAllPeople(dispatch)
    fetchOnePerson(dispatch)
    //fetchAllPlanets(dispatch)
    //fetchAllVehicles(dispatch)
}, [])



    return (
        <>
        <div className="container">
            <div className="">
            <div className="" >
                <div>
                    <h1 style={{ overflowX: 'auto', maxWidth: '100%' }}>Characters</h1>
                    <CharacterCardList
                    allPeople={store.allPeople}
                    singlePerson={store.singlePerson}
                    favorites={store.favorites}/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


