import { FilmCard } from "./FilmCard";



export const FilmCardList = ({ allFilms, dispatch}) => {
    const filmsToRender = Array.isArray(allFilms) ? allFilms : [];

const handleFavoriteClick = (film) => {
    dispatch({
      type: 'bookmark',
      payload: {
                uid: film.uid,
                name: film.title,
                director: film.director,
                release_date: film.release_date
      }
    });
  };

  return (
    <div className="card-carousel-container">
      <div className="card-carousel">
      {filmsToRender.map(film => (
                    <FilmCard 
                        uid={film.uid}
                        title={film.title || film.name}
                        director={film.director}
                        releaseDate={film.release_date}
                        onFavoriteClick={() => handleFavoriteClick(film)}
        />
      ))}

    </div>
    </div>
  );
};