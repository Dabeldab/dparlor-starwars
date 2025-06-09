import { PlanetCard } from "./PlanetCard";

export const PlanetCardList = ({ allPlanets, dispatch }) => {

    const handleFavoriteClick = (planet) => {
        dispatch({
            type: 'bookmark',
            payload: {
                uid: planet.uid,
                name: planet.name,
                type: planet
            }
        });
    };

        return (
        <div style={{
            padding: '1',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Gradient fade effect at the end */}
            <div style={{
                position: 'absolute',
                right: 0,
                top: 0,
                bottom: 0,
                width: '60px',
                background: 'linear-gradient(to right, transparent, var(--bs-body-bg))',
                pointerEvents: 'none',
                zIndex: 10
            }}></div>
            
            <div style={{
                display: 'flex',
                overflowX: 'auto',
                scrollSnapType: 'x mandatory',
                gap: '1.5rem',
                padding: '0 2rem 1rem',
                scrollPadding: '0 2rem',
                scrollbarWidth: 'thin',
            }}>
                {allPlanets.map(planet => (
                    <div key={planet.uid} style={{
                        scrollSnapAlign: 'start',
                        flex: '0 0 auto',
                        width: '280px'
                    }}>
                        <PlanetCard 
                            uid={planet.uid}
                            name={planet.name}
                            climate={planet.climate}
                            terrain={planet.terrain}
                            population={planet.population}
                            onFavoriteClick={() => handleFavoriteClick(planet)}
                            style={{
                                width: '100%',
                                borderRadius: '10px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                transition: 'all 0.3s ease',
                                background: 'linear-gradient(to bottom, #f8f9fa, #e9ecef)',
                                marginRight: '1rem'
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};