import { Link } from "react-router-dom";

export const FilmCard = ({ uid, release_date, episode_id, title, onFavoriteClick }) => {
    const filmImageUrl = `https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/films/${uid}.jpg`;
    
    return (
            <div className="film-card" style={{
            width: "18rem",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            transition: "all 0.3s ease",
            background: "linear-gradient(to bottom, #f8f9fa, #e9ecef)",
            margin: "0 1rem 1rem 0",
            flexShrink: 0
        }}>
            <img 
                src={filmImageUrl} 
                style={{
                    height: "250px",
                    width: "100%",
                    objectFit: "cover",
                    borderBottom: "0px"
                }}
               
            />
            <div style={{ padding: "1.5rem" }}>
                <h5 style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                    color: "#212529",
                    borderBottom: "2px solid #6c757d",
                    paddingBottom: "0.5rem"
                }}>{title}</h5>
                <ul style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 1.5rem 0",
                    fontSize: "0.95rem"
                }}>
                    <li>Title: {title}</li>
                    <li>Release date: {release_date}</li>
                    <li>Episode: {episode_id}</li>
                </ul>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "0.5rem"
                }}>
                    <Link to={`/profile-page/films/${uid}`} style={{ flexGrow: 1 }}>
                        <button style={{
                            width: "100%",
                            backgroundColor: "#0d6efd",
                            border: "none",
                            color: "white",
                            padding: "0.5rem",
                            borderRadius: "5px",
                            cursor: "pointer",
                            transition: "all 0.2s"
                        }}>
                            Learn more!
                        </button>
                    </Link>
                    <button 
                        onClick={onFavoriteClick}
                        style={{
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
    );
};