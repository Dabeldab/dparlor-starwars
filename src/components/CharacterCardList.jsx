import { CharacterCard } from "./CharacterCard";



export const CharacterCardList = ({ allPeople, dispatch}) => {
const handleFavoriteClick = (person) => {
    dispatch({
      type: 'bookmark',
      payload: {
        uid: person.uid,
        name: person.name,
        type: person

      }
    });
  };

  return (
    <div className="card-carousel-container">
      <div className="card-carousel">
      {allPeople.map(person => (
        <CharacterCard 
          key={`all-${person.uid}`}
          uid={person.uid}
          name={person.name}
          //hair_color={singlePerson.hair_color}
          //eyes={singlePerson.eye_color}
          onFavoriteClick={() => handleFavoriteClick(person)}
        />
      ))}
    </div>
    </div>
  );
};