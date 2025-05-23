import { Link } from "react-router-dom"

const style = {
  "width": "18rem"
}

export const CharacterCard = ({uid,name,gender,hair_color,eye_color,handleFavoriteClick}) => {
    return (
        <>
        <div className=" " >
  <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${uid}.jpg`} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <ul className="card-details">Gender: {gender}</ul>
    <ul className="card-details">Hair Color: {hair_color}</ul>
    <ul className="card-details">Eye Color: {eye_color}</ul>
    <div>
    <Link to={`/profile-page/people/${uid}`}>
    <button className="btn btn-primary">Learn more!</button>
    </Link>
    
    <button onClick={() =>handleFavoriteClick} >favorite</button>
   

    </div>
  </div>
</div>
        </>
    )
}