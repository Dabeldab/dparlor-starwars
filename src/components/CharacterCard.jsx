import { Link } from "react-router-dom"


const style = {
  "width": "18rem"
}

export const CharacterCard = ({uid,name,gender,hair_color,eye_color,onFavoriteClick}) => {
    return (
              <>
              <div className="character-card card">
                  <img className="character-card-img" src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${uid}.jpg`} ></img>
                  <div className="card-body">
                      <h5 className="card-title">{name}</h5>
                      <ul className="card-details">Gender: {gender}</ul>
                      <ul className="card-details">Hair Color: {hair_color}</ul>
                      <ul className="card-details">Eye Color: {eye_color}</ul>
                    <div>
                          <Link to={`/profile-page/people/${uid}`}>
                            <button className="btn btn-primary">Learn more!</button>
                          </Link>
                    
                    <button   className="btn-favorite"
                    onClick={() =>onFavoriteClick(name)
                    } style={{
                              background: "none",
                              border: "2px solid #ffc107",
                              color: "#ffc107",
                              borderRadius: "50%",
                              width: "40px",
                              height: "40px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              transition: "all 0.3s",
                              fontSize: "1.2rem",
                              cursor: "pointer"
                              }}
                              >
                              ♡
                    </button>
                  </div>
                  </div>
              </div>
                    </>
                )
            }