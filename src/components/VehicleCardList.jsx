import { VehicleCard } from "./VehicleCard";

export const VehicleCardList = ({ allVehicles, dispatch }) => {
    const handleFavoriteClick = (vehicle) => {
        dispatch({
            type: 'bookmark',
            payload: {
                uid: vehicle.uid,
                name: vehicle.name,
                type: vehicle
            }
        });
    };

    return (
        <div style={{
            padding: '1',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Gradient fade effect */}
            <div style={{
                position: 'absolute',
                right: 0,
                top: 0,
                bottom: 0,
                width: '60px',
                background: 'linear-gradient(to right, transparent, var(--bs-body-bg))',
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
                {allVehicles.map(vehicle => (
                    <div key={vehicle.uid} style={{
                        scrollSnapAlign: 'start',
                        flex: '0 0 auto',
                        width: '280px'
                    }}>
                        <VehicleCard 
                            uid={vehicle.uid}
                            name={vehicle.name}
                            model={vehicle.model}
                            manufacturer={vehicle.manufacturer}
                            vehicle_class={vehicle.vehicle_class}
                            onFavoriteClick={() => handleFavoriteClick(vehicle)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};