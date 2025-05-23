import { CharacterCard } from "./CharacterCard";



export const CharacterCardList = ({ allPeople, singlePerson, dispatch}) => {
const handleFavoriteClick = (person) => {
  dispatch({
    type: 'favoritedPerson',
    payload: {
      uid: person.uid,
      name: person.name
    }
  })
}
  return (
    <div className="d-flex overflow-auto" style={{ flexWrap: 'nowrap' }}>

      {singlePerson && singlePerson.map(person => (
        <CharacterCard 
          key={`single-${person.uid}`}
          uid={person.uid}
          name={person.name}
          //hair_color={singlePerson.hair_color}
          //eyes={singlePerson.eye_color}
          onFavoriteClick={() => handleFavoriteClick}
        />
      ))}
      
      {/* Render all people */}
      {allPeople && allPeople.map(person => (
        <CharacterCard 
          key={`all-${person.uid}`}
          uid={person.uid}
          name={person.name}
          //hair_color={singlePerson.hair_color}
          //eyes={singlePerson.eye_color}
          onFavoriteClick={() => handleFavoriteClick}
        />
      ))}
    </div>
  );
};