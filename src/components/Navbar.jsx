import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect } from "react";
import StarWarsLogo  from "/src/assets/img/Star-Wars-Logo.jpg"
export const Navbar = () => {
 
const { store , dispatch } = useGlobalReducer()
  
const handleRemove = (starId) => {
        dispatch({ 
            type: 'removeBookmark', 
            payload: { starId } 
        });
        console.log(`favorite removed ${starId}`)
    };

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="https://Starwars.com">
      <img src={StarWarsLogo} 
      style={{
        width: "80px",
        height: "40px"
      }}/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Favorites
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                           {store.favorites.length > 0 ? (
                  store.favorites.map(favorite => (
                    <li key={favorite.starId} className="d-flex justify-content-between align-items-center">
                      <Link className="dropdown-item" to={`/profile-page/${favorite.type}/${favorite.uid}`}>
                        {favorite.name}
                      </Link>
                      <button 
                        onClick={() => handleRemove(favorite.starId)}
                        className="btn btn-sm btn-outline-danger me-2"
                        aria-label={`Remove ${favorite.name} from favorites`}
                      >
                        ×
                      </button>
                    </li>
                  ))
                ) : (
                  <li><span className="dropdown-item text-muted">No favorites yet</span></li>
                )}
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
	);
};